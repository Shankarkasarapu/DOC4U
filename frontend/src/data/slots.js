// Bookable slots and "real time" helpers. Keep SLOTS in sync with backend/lib/slots.js.
// All rules use India Standard Time (UTC+5:30), so a visitor's device timezone can't
// make a passed slot look available.

export const SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
export const DAYS_SHOWN = 7;

const IST_OFFSET_MS = 330 * 60 * 1000;

// { dateKey: 'YYYY-MM-DD', minutes: minutes since midnight } in IST
export const nowIST = () => {
  const d = new Date(Date.now() + IST_OFFSET_MS);
  return { dateKey: d.toISOString().slice(0, 10), minutes: d.getUTCHours() * 60 + d.getUTCMinutes() };
};

export const slotMinutes = (label) => {
  const m = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(label || '');
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3] === 'PM') h += 12;
  return h * 60 + Number(m[2]);
};

// Date objects (noon UTC, so they show the right calendar day anywhere) for the next N IST days
export const upcomingDays = (count = DAYS_SHOWN) => {
  const start = Date.parse(`${nowIST().dateKey}T12:00:00Z`);
  return Array.from({ length: count }, (_, i) => new Date(start + i * 86400000));
};

export const toKey = (date) => date.toISOString().slice(0, 10);

// 'past' | 'booked' | 'open'
export const slotState = (dateKey, label, booked = {}, now = nowIST()) => {
  if (dateKey < now.dateKey) return 'past';
  if (dateKey === now.dateKey && slotMinutes(label) <= now.minutes) return 'past';
  if ((booked[dateKey] || []).includes(label)) return 'booked';
  return 'open';
};

export const openSlots = (dateKey, booked, now = nowIST()) =>
  SLOTS.filter((s) => slotState(dateKey, s, booked, now) === 'open');

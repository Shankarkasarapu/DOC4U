// Single place that knows the clinic's bookable slots and what "now" means.
// Appointments are for doctors in India, so every date/time rule uses IST (UTC+5:30, no DST),
// independent of the server's or the visitor's own timezone.
// Keep SLOTS in sync with frontend/src/data/slots.js.

const SLOTS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
const LEAD_MINUTES = 0;      // a slot disappears when its start time is reached (raise to require notice)
const MAX_DAYS_AHEAD = 30;   // how far in advance a booking is accepted
const IST_OFFSET_MS = 330 * 60 * 1000;

function nowIST() {
  const d = new Date(Date.now() + IST_OFFSET_MS);
  return { dateKey: d.toISOString().slice(0, 10), minutes: d.getUTCHours() * 60 + d.getUTCMinutes() };
}

function slotMinutes(label) {
  const m = /^(\d{1,2}):(\d{2}) (AM|PM)$/.exec(label || "");
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3] === "PM") h += 12;
  return h * 60 + Number(m[2]);
}

// Accepts YYYY-MM-DD (preferred) or DD/MM/YYYY (older clients). Returns YYYY-MM-DD or null.
function normalizeDate(input) {
  const s = String(input || "").trim();
  let y, mo, d;
  let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (m) {
    [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  } else {
    m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
    if (!m) return null;
    [d, mo, y] = [Number(m[1]), Number(m[2]), Number(m[3])];
  }
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
  return dt.toISOString().slice(0, 10);
}

// Returns an error message if the slot can't be booked, otherwise null.
function validateSlot(dateKey, time) {
  if (!SLOTS.includes(time)) return "Please choose a valid time slot.";
  const now = nowIST();
  if (dateKey < now.dateKey) return "That date has already passed.";
  const daysAhead = (Date.parse(dateKey) - Date.parse(now.dateKey)) / 86400000;
  if (daysAhead > MAX_DAYS_AHEAD) return `Appointments can be booked up to ${MAX_DAYS_AHEAD} days ahead.`;
  if (dateKey === now.dateKey && slotMinutes(time) <= now.minutes + LEAD_MINUTES) {
    return "That time has already passed. Please pick a later slot.";
  }
  return null;
}

module.exports = { SLOTS, nowIST, slotMinutes, normalizeDate, validateSlot };

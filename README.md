# DOC4U

**Find the right doctor near you and book an appointment in minutes.**

DOC4U is a full-stack doctor appointment platform. Patients search for doctors by name, speciality, location or date, view profiles and reviews, book a slot, manage family members' health details and pay online, all from one place.

---

## Why this project?

Booking a doctor is still harder than it should be, especially outside the big metros:

- **Finding a doctor is guesswork.** People rely on word of mouth or a phone call to a clinic, with no easy way to compare speciality, location, ratings and fees.
- **Booking means waiting.** Phone calls during clinic hours, busy lines and walk-in queues waste time for patients and front-desk staff alike.
- **Families are managed on paper.** A parent booking for children or elderly relatives has to repeat the same details every visit.
- **Local doctors are hard to discover.** Many capable doctors in smaller towns and cities have little online presence.

DOC4U was built to remove that friction. It focuses on **Andhra Pradesh**, with doctors listed across cities such as Visakhapatnam, Vijayawada, Guntur, Tirupati and Rajahmundry, so the first thing a patient sees is care that is actually reachable for them.

## What does it do?

| Step | What the patient does | What DOC4U does |
| ---- | --------------------- | --------------- |
| 1. Search | Types a doctor or speciality, picks a location, optionally a date | Filters doctors instantly. Any single field is enough |
| 2. Choose | Opens a doctor's profile | Shows qualifications, services, fees, rating and patient reviews |
| 3. Book | Picks a date and time slot | Saves the appointment and emails a confirmation |
| 4. Pay | Checks out | Takes payment securely through Razorpay |
| 5. Manage | Opens the dashboard | Lists appointments, dependants, invoices and profile settings |

## How is it useful?

**For patients**
- Find a nearby doctor by speciality and city in seconds instead of phoning around.
- Book at any hour, without waiting on a phone line.
- Compare doctors using ratings, reviews and fees before deciding.
- Add dependants once (parents, children) and book for them without re-entering details.
- Get an email confirmation, and keep every appointment and invoice in one dashboard.

**For doctors and clinics**
- A discoverable online profile, even for practices with no website.
- Fewer booking calls for the front desk.
- Reviews that build trust with new patients.

**For developers and learners**
- A complete, realistic example of a full-stack app: React UI, REST API, MongoDB, email, online payments and third-party sign-in.
- Clean separation of frontend and backend, with a small design system and reusable components.

---

## Features

- **Smart doctor search**: filter by doctor or speciality, location (the dropdown is built from the doctors' own data) and date.
- **Doctor profiles and reviews**: qualifications, services, ratings and patient feedback.
- **Appointment booking**: choose a date and time slot, with an email confirmation.
- **Patient dashboard**: appointments, dependants, invoices and profile settings.
- **Authentication**: email and password sign-up and login, Google sign-in (Firebase), forgot and reset password with OTP.
- **Payments**: Razorpay checkout.
- **Contact form**: validated form that emails the support inbox.
- **Protected pages**: booking, checkout and account pages require login, enforced in the UI and on the booking API.
- **Responsive UI**: works on phones, tablets and desktops, with loading skeletons, a top progress bar and accessible carousels.

## Tech stack

| Layer    | Technology |
| -------- | ---------- |
| Frontend | React 18, React Router 6, React-Bootstrap, MUI, Axios, Firebase Auth |
| Backend  | Node.js, Express 4, Multer, Nodemailer, Razorpay SDK |
| Database | MongoDB (database `Hospital`) |
| Hosting  | Render |

## Project structure

```
DOC4U/
├── backend/
│   ├── index.js              # Express app and route registration
│   ├── mongodb/connectDB.js  # MongoDB connection and indexes
│   ├── nodemailer/           # Email transport
│   ├── routes/               # One file per API endpoint
│   └── scripts/              # Maintenance scripts (e.g. doctor locations)
└── frontend/
    ├── public/               # Static assets, HTML template
    └── src/
        ├── components/       # Header, Footer, DoctorSearch, DoctorItem, loaders...
        ├── pages/            # Home, About us, Contact us, FAQ
        ├── patients/         # Doctors list, booking, checkout, dashboard...
        ├── Authentication/   # Login, register, password reset
        ├── Doctor/           # Doctor-side pages
        ├── styles/           # Design system and loading styles
        └── data/             # API endpoint, helpers, Firebase config
```

## Getting started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (local or Atlas)
- A Gmail account with an app password (for sending email)

### 1. Clone

```bash
git clone https://github.com/Shankarkasarapu/DOC4U.git
cd DOC4U
```

### 2. Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
PORT=3001
```

Start it:

```bash
npm start
```

The API runs at `http://localhost:3001/api`. A health check is available at `/health`.

### 3. Frontend

```bash
cd frontend
npm install
```

Create `frontend/.env` with your Firebase project settings:

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

The API address is set in `frontend/src/data/ENDPOINT.js`. Point it at `http://localhost:3001/api/` to use your local backend.

```bash
npm start
```

The app opens at `http://localhost:3000`.

### Production build

```bash
cd frontend
npm run build
```

## API overview

All routes are under `/api`.

| Method | Endpoint | Purpose |
| ------ | -------- | ------- |
| POST | `/add-user` | Register a user |
| POST | `/login` | Log in |
| POST | `/get-user-details` | Fetch a user profile |
| POST | `/update-user-details` | Update a profile |
| POST | `/get-doctors` | List all doctors |
| POST | `/top-doctors` | Featured doctors |
| POST | `/get-doctor-details` | One doctor with reviews |
| POST | `/add-review` | Add a doctor review |
| POST | `/book-appointment` | Book an appointment |
| POST | `/get-user-appointments` | A user's appointments |
| POST | `/add-dependants` | Add a dependant |
| POST | `/create-order` | Create a Razorpay order |
| POST | `/send-messages` | Contact form |
| POST | `/forgot-password`, `/verify-otp`, `/reset-password`, `/change-password` | Password recovery |

## Database

The app uses the `Hospital` database with these collections: `users`, `Doctors_data` and `appointments`. Indexes on `users.email` and `appointments.user_id` are created automatically on startup.

## Roadmap

- Server-issued login tokens (JWT) so every API call is authenticated.
- Password hashing (for example bcrypt) and moving payment keys into environment variables.
- Per-doctor working hours, so search by date can show only doctors who are actually available.
- A doctor-side dashboard to confirm, reschedule and manage appointments.
- Automated tests and a CI pipeline.

## Known limitations

- Login state is a `user_id` stored in the browser. There are no server-issued sessions or tokens yet.
- Passwords are stored without hashing, and payment keys are still in source code. Fix both before using this with real patients or real money.
- Search by date carries the chosen date into booking but cannot yet filter doctors by availability.

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes and open a pull request.

## Author

Built by [Shankarkasarapu](https://github.com/Shankarkasarapu).

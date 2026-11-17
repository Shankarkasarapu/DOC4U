# DOC4U

DOC4U is a full-stack doctor appointment booking platform. Patients can search for doctors by name, speciality, location or date, view profiles, book appointments, manage dependants and pay online.

## Features

- **Doctor search**: filter by doctor or speciality, location (built from the doctors' own data) and date. Any single field is enough.
- **Doctor profiles and reviews**: qualifications, services, ratings and patient feedback.
- **Appointment booking**: pick a date and time slot. A confirmation email is sent to the patient.
- **Patient dashboard**: appointments, dependants, invoices and profile settings.
- **Authentication**: email and password sign-up and login, Google sign-in (Firebase), forgot and reset password with OTP.
- **Payments**: Razorpay checkout.
- **Contact form**: validated form that emails the support inbox.
- **Protected pages**: booking, checkout and account pages require login.
- **Responsive UI**: works on phones, tablets and desktops, with loading skeletons and a top progress bar.

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

## Known limitations

- Login state is a `user_id` stored in the browser. There are no server-issued sessions or tokens yet.
- Passwords are stored without hashing. Adding hashing (for example bcrypt) is a priority before real use.
- Payment keys must be moved from source code into environment variables.

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes and open a pull request.

## Author

Built by [Shankarkasarapu](https://github.com/Shankarkasarapu).

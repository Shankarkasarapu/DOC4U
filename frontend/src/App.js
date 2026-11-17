import './App.css';
import "animate.css";
import Default from './theme/Default';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import DoctorSignup from './Authentication/DoctorSignup';
// import Appointments from './Doctor/Appointments';
// import Invoices from './Doctor/Invoices';
// import Login from './Doctor/Login';
// import Appointments from './Doctor/Appointments';
// import Invoices from './Doctor/Invoices';
import DoctorDefault from './theme/DoctorDefault';
import SecurityHeaders from './data/SecurityHeaders';
import ENDPOINT from './data/ENDPOINT';
import axios from 'axios';
import { lazy, Suspense, useEffect, useState } from 'react';
import GetUserId from './data/GetUserID';
import RequireAuth from './components/RequireAuth';
import { PageLoader, TopProgress } from './components/Loaders';

// Route-level code splitting: each page is downloaded only when visited
const Appointments = lazy(() => import('./patients/Appointments'));
const Booking = lazy(() => import('./patients/Booking'));
const BookingSuccess = lazy(() => import('./patients/BookingSuccess'));
const ChangePassword = lazy(() => import('./patients/ChangePassword'));
const Checkout = lazy(() => import('./patients/Checkout'));
const Dependants = lazy(() => import('./patients/Dependants'));
const DoctorProfile = lazy(() => import('./patients/DoctorProfile'));
const DoctorsList = lazy(() => import('./patients/DoctorsList'));
const Invoices = lazy(() => import('./patients/Invoices'));
const Patientsdasboard = lazy(() => import('./patients/Patientsdasboard'));
const ProfileSettings = lazy(() => import('./patients/ProfileSettings'));
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Contactus = lazy(() => import('./pages/Contactus'));
const Faq = lazy(() => import('./pages/Faq'));
const LoginEmail = lazy(() => import('./Authentication/LoginEmail'));
const LoginPhone = lazy(() => import('./Authentication/LoginPhone'));
const PatientSignup = lazy(() => import('./Authentication/PatientSignup'));
const DoctorDashboard = lazy(() => import('./Doctor/DoctorDashboard'));
const Requests = lazy(() => import('./Doctor/Requests'));
const AvailableTimings = lazy(() => import('./Doctor/AvailableTimings'));
const MyPatients = lazy(() => import('./Doctor/MyPatients'));
const Reviews = lazy(() => import('./Doctor/Reviews'));
const Accounts = lazy(() => import('./Doctor/Accounts'));
const DoctorChangePswd = lazy(() => import('./Doctor/DoctorChangePswd'));
const DoctorProfileSettings = lazy(() => import('./Doctor/DoctorProfileSettings'));
const DoctorPayment = lazy(() => import('./Doctor/DoctorPayment'));
const DoctorAppointmentStart = lazy(() => import('./Doctor/DoctorAppointmentStart'));
const DoctorDetails = lazy(() => import('./Authentication/DoctorDetails'));
const ForgotPassword = lazy(() => import('./Authentication/ForgotPassword'));
const DoctorRegister = lazy(() => import('./Authentication/DoctorRegister'));
const Login = lazy(() => import('./Authentication/DocLogin'));
const Register = lazy(() => import('./Authentication/Register'));
const Home = lazy(() => import('./pages/Home'));
const PatientDetails = lazy(() => import('./Authentication/PatientDetails'));
const ResetPassword = lazy(() => import('./Authentication/ResetPassword'));

const Loader = () => <><TopProgress routeLoading /><PageLoader label="Loading page..." /></>;

function App() {
  const user = GetUserId()
  const type = JSON.parse(localStorage.getItem('usertype') ) || null;
  const [det,setDet]=useState([])
  const getUser = async () => {
    try {
      const data = new FormData();
      data.append("user_id", user);
      const res = await axios.post(ENDPOINT + 'get-user-details', data, SecurityHeaders);
      if (res && res.data.status === 'success') {
        setDet(res.data.user);
      } else {
        console.error('Failed to fetch user details:', res.data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error fetching user details:', error.message || error);
    }
  };
  useEffect(()=>{
      if(user)
      {
        getUser()
      }
    },[])

    useEffect(() => {
      window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <BrowserRouter>
        <TopProgress />
        <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/' element={type === 'doctor' ? <DoctorDefault><Home/></DoctorDefault> : <Default data={det}><Home/></Default>} />
            <Route path='/doctor-signup' element={<DoctorDefault><DoctorRegister/></DoctorDefault>}/>
            <Route path='/doctor-details' element={<DoctorDefault><DoctorDetails/></DoctorDefault>}/>
            <Route path='/reset-password/:id' element={<Default data={det}><ResetPassword/></Default>}/>
            <Route path='/patient-details/:id/:type' element={<Default data={det}><PatientDetails/></Default>}/>
            <Route path='/login' element={user ? <Default data={det}><Patientsdasboard /></Default> : <Default data={det}><LoginEmail/></Default> }></Route>
            <Route path='/login-phone' element={<Default data={det}><LoginPhone/></Default>}></Route>
            {/* <Route path='/doctersignup' element={<DoctorSignup/>}></Route> */}
            <Route path='/patient-signup' element={<Default data={det}><PatientSignup/></Default>}></Route>
            <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path='/doctordashboard' element={<DoctorDashboard></DoctorDashboard>}></Route>
            <Route path='/requests' element={<Requests></Requests>}></Route>
            <Route path='/appointments' element={<Appointments></Appointments>}></Route>
            <Route path='/availabletimings' element={<AvailableTimings></AvailableTimings>}></Route>
            <Route path='/mypatients' element={<DoctorDefault><MyPatients/></DoctorDefault>}></Route>
            <Route path='/reviews' element={<DoctorDefault><Reviews/></DoctorDefault>}></Route>
            <Route path='/accounts' element={<DoctorDefault><Accounts/></DoctorDefault>}></Route>
            <Route path='/invoices' element={<Invoices/>}></Route>
            <Route path='/doctorpayment' element={<DoctorDefault><DoctorPayment/></DoctorDefault>}></Route>
            <Route path='/doctorprofilesettings' element={<DoctorDefault><DoctorProfileSettings/></DoctorDefault>}></Route>
            <Route path='/doctorchangepswd' element={<DoctorDefault><DoctorChangePswd/></DoctorDefault>}></Route>
            <Route path='/doctor-login' element={<DoctorDefault><Login/></DoctorDefault>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            {/* <Route path='/doctorregister' element={<DoctorRegister></DoctorRegister>}></Route> */}
            <Route path='/doctorappointmentstart' element={<DoctorDefault><DoctorAppointmentStart/></DoctorDefault>}></Route>
            <Route path='/aboutus' element={<Default data={det}><Aboutus/></Default>} />
            <Route path='/contactus' element={<Default data={det}><Contactus/></Default>} />
            <Route path='/faq' element={<Default><Faq/></Default>} />
            <Route path='/patient-dashboard' element={user ? <Default data={det}><Patientsdasboard /></Default> : <Default data={det}><LoginEmail/></Default> } />
            <Route path='/appointments' element={<Default data={det}><Appointments/></Default>} />
            <Route path='/dependants' element={<RequireAuth><Default data={det}><Dependants/></Default></RequireAuth>} />
            <Route path='/patient-invoices' element={<RequireAuth><Default data={det}><Invoices/></Default></RequireAuth>} />
            <Route path='/booking/:id' element={<RequireAuth><Default data={det}><Booking /></Default></RequireAuth>} />
            <Route path='/booking-success' element={<RequireAuth><Default data={det}><BookingSuccess /></Default></RequireAuth>} />
            <Route path='/change-password' element={<RequireAuth><Default data={det}><ChangePassword /></Default></RequireAuth>} />
            <Route path='/checkout' element={<RequireAuth><Default data={det}><Checkout /></Default></RequireAuth>} />
            <Route path='/doctor-profile/:id' element={<Default data={det}><DoctorProfile /></Default>} />
            <Route path='/doctors-list' element={<Default data={det}><DoctorsList /></Default>} />
            <Route path='/profile-settings' element={<RequireAuth><Default data={det}><ProfileSettings /></Default></RequireAuth>} />
        </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;


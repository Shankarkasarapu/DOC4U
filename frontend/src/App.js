import './App.css';
import "animate.css";
import Appointments from './patients/Appointments';
import Booking from './patients/Booking';
import BookingSuccess from './patients/BookingSuccess';
import ChangePassword from './patients/ChangePassword';
import Checkout from './patients/Checkout';
import Dependants from './patients/Dependants';
import DoctorProfile from './patients/DoctorProfile';
import DoctorsList from './patients/DoctorsList';
import Invoices from './patients/Invoices';
import Patientsdasboard from './patients/Patientsdasboard';
import ProfileSettings from './patients/ProfileSettings';
import Default from './theme/Default';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Faq from './pages/Faq';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginEmail from './Authentication/LoginEmail';
import LoginPhone from './Authentication/LoginPhone';
import PatientSignup from './Authentication/PatientSignup';
// import DoctorSignup from './Authentication/DoctorSignup';
import DoctorDashboard from './Doctor/DoctorDashboard';
import Requests from './Doctor/Requests';
import AvailableTimings from './Doctor/AvailableTimings';
// import Appointments from './Doctor/Appointments';
import MyPatients from './Doctor/MyPatients';
import Reviews from './Doctor/Reviews';
import Accounts from './Doctor/Accounts';
// import Invoices from './Doctor/Invoices';
import DoctorChangePswd from './Doctor/DoctorChangePswd';
import DoctorProfileSettings from './Doctor/DoctorProfileSettings';
import DoctorPayment from './Doctor/DoctorPayment';
// import Login from './Doctor/Login';
import DoctorAppointmentStart from './Doctor/DoctorAppointmentStart';
import DoctorDetails from './Authentication/DoctorDetails';
import ForgotPassword from './Authentication/ForgotPassword';
import DoctorRegister from './Authentication/DoctorRegister';
// import Appointments from './Doctor/Appointments';
// import Invoices from './Doctor/Invoices';
import Login from './Authentication/DocLogin';
import Register from './Authentication/Register';
import Home from './pages/Home';
import PatientDetails from './Authentication/PatientDetails';
import DoctorDefault from './theme/DoctorDefault';
import ResetPassword from './Authentication/ResetPassword';
import SecurityHeaders from './data/SecurityHeaders';
import ENDPOINT from './data/ENDPOINT';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GetUserId from './data/GetUserID';

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
            <Route path='/dependants' element={<Default data={det}><Dependants/></Default>} />
            <Route path='/patient-invoices' element={<Default data={det}><Invoices/></Default>} />
            <Route path='/booking/:id' element={<Default data={det}><Booking /></Default>} />
            <Route path='/booking-success' element={<Default data={det}><BookingSuccess /></Default>} />
            <Route path='/change-password' element={<Default data={det}><ChangePassword /></Default>} />
            <Route path='/checkout' element={<Default data={det}><Checkout /></Default>} />
            <Route path='/doctor-profile/:id' element={<Default data={det}><DoctorProfile /></Default>} />
            <Route path='/doctors-list' element={<Default data={det}><DoctorsList /></Default>} />
            <Route path='/profile-settings' element={<Default data={det}><ProfileSettings /></Default>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


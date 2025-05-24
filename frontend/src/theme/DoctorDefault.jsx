import React from 'react'
import Footer1 from '../components/Footer1'
import DoctorHeader from '../components/DoctorHeader'

const DoctorDefault = ({children}) => {
  return (
    <>
        <DoctorHeader/>
        {children}
        <Footer1/>
    </>
  )
}

export default DoctorDefault
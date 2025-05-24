import React from 'react'
import Header from '../components/Header'
import Footer1 from '../components/Footer1'

const Default = ({children,data}) => {
  return (
    <div>
        <Header det={data}></Header>
        {children}
        <Footer1></Footer1>
    </div>
  )
}

export default Default
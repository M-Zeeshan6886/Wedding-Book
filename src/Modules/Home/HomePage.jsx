import React from 'react';
import './HomePage.scss';
import Footer from '../../Components/Footer/Footer'
import Body from '../../Components/Mainbody/body'
import NavBar from '../../Components/NavBar/NavBar'

const HomePage = () => {
  return (
    <>
    <div className='sticky'>
    <NavBar />
    </div>
    <Body/>
    <Footer />
    </>
  )
}

export default HomePage
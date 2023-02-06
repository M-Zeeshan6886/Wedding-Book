import React, { useState } from 'react';
import './NavBar.scss';
import Logo from '../../assets/NvAssets/logo.png';
import Dil from '../../assets/NvAssets/dil.png';
import Polygon from '../../assets/NvAssets/polygon.png';
import Search from '../../assets/NvAssets/search.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoMdClose} from 'react-icons/io';

const NavBar = () => {
    const [sidebar, setSidebar]= useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <div className='bar-container'>
    <div className='bar-container-content'>
    <img src={Logo} alt='wedding-logo' />
    <div className='bar-container-content-btns'>
        <button>PLANNING TOOLS</button>
        <button>VENUES</button>
        <button>SUPPLIERS</button>
        <button>DRESSES</button>
        <button>IDEAS</button>
        <button>FORUMS</button>
        <button>GIFT LIST</button>
        <button>STATIONARY</button>
    </div>
    <div className='bar-container-content-loginbtns'>
        <button>LOG IN</button>
        <button>SIGN UP</button>
    </div>
    </div>
    </div>


{/* //Responsive NavbarView */}

<div className='responsive-bar'>
    <div className='responsive-bar-content'>
     <img src={Logo} alt="logo" />
     {sidebar ? (<IoMdClose  className='berguricon'  onClick={showSidebar}/>
     ) 
     : (<GiHamburgerMenu className='berguricon' onClick={showSidebar} />) }
     
    </div>
</div>

{/* Responsive container */}
 {sidebar &&  <div className='responsive-container'>
    <div className='responsive-container-content'>
        <div className='responsive-container-content-btns'>
        <button>PLANNING TOOLS</button>
        <button>VENUES</button>
        <button>SUPPLIERS</button>
        <button>DRESSES</button>
        <button>IDEAS</button>
        <button>FORUMS</button>
        <button>GIFT LIST</button>
        <button>STATIONARY</button>
        </div>
    </div>
    <div className='responsive-container-content-two'>
    <div className='responsive-container-content-two-btns'>
        <button>LOG IN</button>
        <button>SIGN UP</button>
    </div>
    </div>
</div>
}






    <div className="subheader-container">
        <div className='subheader-container-content'>
            <div className='subheader-container-content-left'>
                <img src={Dil} alt='frame' />
                <h2>Find the</h2> 
                    <h1>Perfect Wedding Vendor
                </h1>
                <p>"Search tamil wedding supplier bt category location or name"</p>
               <div className='subheader-container-content-left-qbar'>
                <div className='subheader-container-content-left-qbar-content'>
                <QBar Text="We're looking for" />
                <QBar Text="Enter Location" />
                <QBar Text="Or called" />
                <img src={Search} alt="search" />
                </div>
               </div>
            </div>
        </div>
    </div>





    </>
  )
}

export default NavBar;




const QBar=({Text})=>{
    return(
        <>
<div className='Qbar-container'>
<p> {Text} </p>
<img src={Polygon} alt="polygon" />
</div>
</>
    )
}
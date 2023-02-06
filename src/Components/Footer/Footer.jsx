import React from 'react';
import './Footer.scss';
import PlayStore from '../../assets/footerAssets/playstore.svg';
import Apple from '../../assets/footerAssets/apple.svg';

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className='footer-container-content'>
     <div className='footer-container-content-1'>
        <h2>Quick Links</h2>
        <p>Trendings</p>
        <p>Destinations</p>
        <p>Best Trip Orgnazers</p>
        <p>Your Travel Mate</p>
        <p>Meet Our Guides</p>
     </div>
     <div className='footer-container-content-2'>
        <h2>Top Destinations</h2>
        <p>Turkey</p>
        <p>Malaysia</p>
        <p>Dubai</p>
        <p>Switzerland</p>
     </div>
     <div className='footer-container-content-3'>
        <h2>For Business</h2>
        <p>Restaurants</p>
        <p>Experiences</p>
        <p>Community</p>
        <p>Homes</p>
     </div>
     <div className='footer-container-content-4'>
        <h2>Get Our Apps</h2>
        {/* <FooterBox /> */}
        <img src={PlayStore} alt="playstore" />
        <img src={Apple} alt="playstore" />
     </div>
    </div>
    <div className='footer-container-two'>
        <p>© 2018 TripsCon All rights reserved.</p>
    </div>
</div>
  )
}

export default Footer;



// const FooterBox=()=>{
//     return(
//         <div className='socialBox'>
//             <div className='socialBox-content'>
             
//             </div>
//         </div>
//     )
// }
import React from 'react';
import './body.scss';
import Camra from '../../assets/bodyAssets/camra.png';
import Flower from '../../assets/bodyAssets/flower.png';
import Music from '../../assets/bodyAssets/music.png';
import Dress from '../../assets/bodyAssets/dress.png';
import Heart from '../../assets/bodyAssets/heart.png';
import Checklist from '../../assets/bodyAssets/checklist.jpg';
import Background from '../../assets/bodyAssets/background.jpg';
import Guest from '../../assets/bodyAssets/guest.jpg';
const Body = () => {
  return (
    <>
    <div className='body-container1'>
        <div className='body-container1-content'>
            <h1>Browse featured categories</h1>
            <div className='body-container1-content-gallery'>
           <Icongallery Icon1={Camra} icontext="Photography"/>
           <Icongallery Icon1={Flower} icontext="Florist"/>
           <Icongallery Icon1={Music} icontext="Music"/>
           <Icongallery Icon1={Dress} icontext="Dress"/>
            </div>
        </div>
    </div>
    <div className="dil-container2">
        <div className='dil-contaner2-content'>
        <Heartcomp 
        Ptag="Tools That Make Wedding Planning a Piece of Cake"
        Sptag="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />  
        </div>
    </div>
    <div className='imagegallery-container'>
    <div className='imagegallery-container-content'>
   <ImageG 
   GalleryText="Checklist"
   Checklist={Checklist}
   />

   <ImageG 
   GalleryText="Guest"
   Checklist={Guest}
   />

   <ImageG 
   GalleryText="Website"
   Checklist={Background}
   />
   <ImageG 
   GalleryText="Checklist"
   Checklist={Checklist}
   />
   <ImageG 
   GalleryText="Guest"
   Checklist={Guest}
   />
   <ImageG 
   GalleryText="Website"
   Checklist={Background}
   />

    </div>
    </div>

<Heartcomp 
        Ptag="Feature Wedding Suppliers In London"
        Sptag="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />


    <div className='card1-container'>
        <div className='card1-container-content'>
        <Card1 />
        <Card1 />
        <Card1 />
        </div>
    </div>

<Heartcomp 
        Ptag="Real Weddings"
        Sptag="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

    </>
  )
}

export default Body;


const Icongallery=({Icon1,icontext})=>{
    return(
        <div className='icon'>
            <img src={Icon1} alt="icon1" />
            <p> {icontext} </p>
        </div>
    )
}


const Heartcomp=( {Ptag,Sptag} )=>{
    return(
        <div className='dildata-container'>
            <div className='dildata-container-content'>
            <p> {Ptag}
</p>
<span>{Sptag}</span>
                <img src={Heart} alt="hearImg" />
            </div>
        </div>
    )
}


const ImageG=({Checklist,GalleryText})=>{
    return(
        <div className='IGallery'>
            <div className='IGallery-photo'>
            <img src={Checklist} alt="checklist" />
            </div>
            <p>{GalleryText}</p>
        </div>
    )
}

const Card1=()=>{
    return(
        <div className='cardbox'>
            <div className='cardbox-content'>
                <img src={Background} alt="photo" />
                <h1>Title</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
        </div>
    )
}
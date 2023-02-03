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
import Img1 from '../../assets/bodyAssets/Image1.png';
import Img2 from '../../assets/bodyAssets/image2.png';
import Img3 from '../../assets/bodyAssets/image3.png';
import Arrow from '../../assets/bodyAssets/arrow.png';
import Bg1ph from '../../assets/bodyAssets/bg1.jpg';
import Bg2ph from '../../assets/bodyAssets/bg2.jpg';
import Bg3ph from '../../assets/bodyAssets/bg3.jpg';

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

<div className='card2-container'>
    <div className='card2-container-content'>
<Card2 />
<Card2 />
<Card2 />
    </div>
</div>


<Heartcomp 
        Ptag="2021 Couple's Choice Awards"
        Sptag="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />

<div className='bg-cards'>
    <div className='bg-cards-content'>
<BgCards  backgroundImage={Bg1ph}/>
<BgCards  backgroundImage={Bg2ph} />
<BgCards backgroundImage={Bg3ph} />
    </div>
</div>

<Heartcomp 
        Ptag="Join The Conversation"
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

const Card2=()=>{
    return(
        <div className='multiImg-card'>
            <div className='multiImg-card-content'>
                <div className='multiImg-card-content-1'>
                    <img src={Img1} alt="Img1" />
                </div>
                <div className='multiImg-card-content-2'>
                    <img src={Img2} alt="Img2" />
                    <img src={Img3} alt="Img3" />
                    <img src={Img2} alt="Img2" />
                </div>
                <div className='multiImg-card-content-3'>
                    <div className='multiImg-card-content-3-content'>
                        <h1>Raj & Kumari</h1>
                        <p>Columbo, Srilanka</p>
                    </div>
                 <img src={Arrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}



const BgCards=(props)=>{
    return(
        <div className='bgcards-container' style={{
           backgroundImage: `linear-gradient(180deg, rgba(109, 109, 109, 0) 0%, rgba(34, 34, 34, 0.7) 100%),url(${props.backgroundImage})`
          }}>
        <div className='bgcards-container-content'>
            <button>Photography</button>
            <h1>Wedding Tips For Fashion</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        </div>
    )
}

import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import './alice-carousel.css'
 
const Event = () => {
  const options = {

      responsiveClass: true,
      dots: true,
      autoPlay: true,
      autoPlayInterval : 2500,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 4,
    
            }
        },
    };
    
  return (
    <div className='relative ' 
    style={{ 
      background: 'linear-gradient(to right, rgba(6, 190, 181, 0.85), rgba(72, 177, 191, 0.86)) fixed',
      alignItems:'center',
      height:'auto',
      minHeight:'375px',
      }}>
   
  <div  style={{backgroundImage:`url(${require("../image/topper1.jpg")})`, backgroundAttachment:'fixed', opacity:'.20', position:'relative', backgroundRepeat:'no-repeat', objectFit:'cover', width:'100%'}} className='flex flex-wrap h-auto  ' >
  </div>
  <div className=" my-8 cta-text1">
  <span class="flex justify-center mx-auto"><hr class="flex ml-auto w-1/6 mt-12 text-black"/>
    <img src={require("../image/head.png")} alt='icon' height='80px' width='80px' className='flex justify-center ' />
    <hr class="w-1/6 flex mr-auto mt-12  text-black"/> </span>
          <h2 className='flex flex-wrap justify-center mx-auto font-serif text-center text-white uppercase text-2xl uppercase' >EVENTS</h2>
         </div>
    <AliceCarousel mouseTrackingEnabled  {...options} >
          <div>
          <h1 className='text-white text-center'>PRIMARY</h1>
             <img src={require("../image/e2.webp")} alt='APSGallery1' className='w-64 h-64' style={{marginLeft:"50px"}}/>
          </div>
              <img src={require("../image/e1.jpg")} alt='APSGallery2' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
            <img src={require("../image/e3.jpg")} alt='APSGallery3' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
               <img src={require("../image/e4.jpg")} alt='APSGallery4' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
               <img src={require("../image/e5.jpg")} alt='APSGallery5' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
               <img src={require("../image/e6.jpg")} alt='APSGallery6' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
               <img src={require("../image/e7.jpg")} alt='APSGallery7' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
               {/* <img src={require("../image/c1.jpg")} alt='APSGallery8' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
              //  <img src={require("../image/c1.jpg")} alt='APSGallery9' className='w-64 h-64 ' style={{marginLeft:"50px"}}/>
              // <img src={require("../image/c1.jpg")} alt='APSGallery10' className='w-64 h-64 ' style={{marginLeft:"50px"}}/> */}
             
    </AliceCarousel>
    </div>
  )
}
export default Event
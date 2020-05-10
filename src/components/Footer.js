import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

function Footer() {
    return (
         <div className='relative ' 
            style={{
                background: 'linear-gradient(to right, rgba(255, 82, 47, 0.85), rgba(221, 36, 118, 0.86)) fixed',
              alignItems:'center',
              height:'auto',
              minHeight:'375px',
              }}>
                  <div className='flex flex-wrap'>
                      <div className='w-full md:w-1/3 my-8'>
                          <div className='flex mx-auto justify-center items-center'>
                            <img src={require('../image/favicon.png')} className='h-32 ' alt='logo' />
                            <h1 className='text-yellow-400 text-center text-lg font-semibold items-center md:flex block'>School Name</h1>
                          </div>
                            <p className='text-center text-white mt-8'>email@gmail.com</p>
                            <hr className='border-yellow-500 mt-2 mx-8'/>
                            <p className='text-center text-white mt-0'>9876543210</p>
                            <p className='text-center text-white'>0755625847</p>
                            <hr className='border-yellow-500 mt-2 mx-8'/>
                            <p className='text-center text-white mx-16'>Adderss : village & post Khajuri sadak bhopal madhya pradesh</p>
                            <hr className='border-yellow-500 mt-2 mx-8'/>
                      </div>
                      <div className='w-full md:w-1/3 my-8'>
                      <h1 className='text-yellow-400 text-center text-lg font-semibold md:mt-16'>Important Links</h1>
                      <BrowserRouter>
                      <Link to='/Home' className='my-2 justify-center mx-auto flex'>Home</Link>
                      <Link to='/Contact' className='my-2 justify-center mx-auto flex'>Contact Us</Link>
                      <Link to='/Gallery' className='my-2 justify-center mx-auto flex'>Gallery</Link>
                      <Link to='/Facilities' className='my-2 justify-center mx-auto flex'>Facilities</Link>
                      </BrowserRouter>

                      </div>
                      <div className='w-full md:w-1/3 my-8'>
                        <h1 className='text-yellow-400 text-center text-lg font-semibold md:mt-16'>Follow Us</h1>

                      </div>
                  </div>
                  
            
        </div>
    )
}

export default Footer

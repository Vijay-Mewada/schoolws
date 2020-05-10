import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
 
const Topper = () => {          
        return (
            <div>
               <div className='relative ' 
            style={{
              
      background: 'linear-gradient(to right, rgba(66, 135, 245, 0.85), rgba(140, 203, 219, 0.86)) fixed',
              alignItems:'center',
              height:'auto',
              minHeight:'375px',
              }}>
                  <div  style={{backgroundImage:'url(/image/awardbg.JPEG)', backgroundAttachment:'fixed', opacity:'.20', position:'relative', backgroundRepeat:'no-repeat', objectFit:'cover', width:'100%'}} className='flex flex-wrap h-auto  ' >
  </div>
  <div className=" my-8 cta-text1">
  <hr class="flex ml-auto w-1/6 mt-12 text-black"/>
    <img src={require('../image/head.png')} alt='icon' height='80px' width='80px' className='mx-auto justify-center ' />
    <hr class="w-1/6 flex mr-auto mt-12  text-black"/> 
          <h2 className='flex flex-wrap justify-center mx-auto font-serif text-center text-white uppercase text-2xl' >Our Topper</h2>
         </div>
               <div className='flex flex-wrap'>
                    <div className='w-full m-4 md:w-1/5'>
                    <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1"
                  slide
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>

          
          </div>

          <div className='w-full m-4 md:w-1/5'>
          <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1"
                  slide
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>

          
          </div>

          <div className='w-full m-4 md:w-1/5'>
          <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1"
                  slide
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>

          
          </div>

          <div className='w-full m-4 md:w-1/5'>
          <MDBContainer>
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1"
                  slide
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img
                          className="d-block w-100"
                          src={require("../image/frame.png")}
                          alt="First slide"
                          style={{
                            backgroundImage:`url(${require("../image/topper1.jpg")})`,
                            backgroundRepeat:'no-repeat'
                          }}

                        />
                      </MDBView>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBContainer>
              </div>
          
          </div>
                   
                    
                    

                </div>
            </div>
           
        );
      }
export default Topper

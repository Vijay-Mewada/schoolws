import React, { useState } from 'react';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from 'reactstrap';
import Home from '../pages/Home'
import App from '../App'
import Aboutus from '../pages/Aboutus'
import Principalmassage from '../pages/Principalmassage'
import Directormessage from '../pages/Directormessage'
import Managementmessage from '../pages/Managementmessage'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const Drop = () => {
    document.getElementById("dropdown").style.display = "block";

  }
  const Dropup = () => {
    document.getElementById("dropdown").style.display = "none";

  }



  //sticky nav
  // const navbar = document.getElementById("navbar");
  // const sticky = navbar.offsetTop;

  //     window.onscroll = () =>{myfunction()};

  //     const myfunction = () =>{
  //       if (window.pageYOffset >= sticky) {
  //         navbar.classList.add("sticky")
  //       } else {
  //         navbar.classList.remove("sticky");
  //       } 
  //       }

  return (
    <BrowserRouter>
      <div id='navbar'>
        <div className='mx-auto justify-center flex'>
          <img src={`${process.env.PUBLIC_URL}/favicon.ico`} className='hidden fixed md:block mt-2 z-30' alt='logo' />
        </div>
        <div className='fixed w-full z-20'>

          <Navbar className='bg-indigo-400  w-full' expand="md">
            <Link to="/" className='text-black my-auto items-center font-semibold font-mono text-xl hover:no-underline hover:text-white'>School Name</Link>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>



                <Link to='/Home' className='mx-2 font-serif'>Home</Link>


                <div className='mx-2 font-serif cursor-pointer' onMouseEnter={Drop} onMouseLeave={Dropup}>About Us
                  <ul className='hidden absolute mt-0 z-10' id='dropdown'>
                    <li><Link to='/Aboutus' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>About Us</Link></li>
                    <li><Link to='/Principalmassage' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>Principal's Massage</Link></li>
                    <li><Link to='/Directormessage' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>Director's Massage</Link></li>
                    <li><Link to='/Managementmessage' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>Management Message</Link></li>
                    <li><Link to='/' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>A</Link></li>
                  </ul>
                </div>


                <Link to='/Home' className='mx-2 font-serif' >Home</Link>


                <Link to='/Home' className='mx-2 font-serif'>Home</Link>


                <Link to='/Home' className='mx-2 font-serif'>Home</Link>


                <Link to='/Home' className='mx-2 font-serif'>Home</Link>


                <Link to='/Home' className='mx-2 font-serif'>Home</Link>

              </Nav>
            </Collapse>
          </Navbar>

          <Switch>

            
          </Switch>

        </div>
      </div>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Aboutus" component={Aboutus} />
      <Route exact path="/Principalmassage" component={Principalmassage} />
      <Route exact path="/Directormessage" component={Directormessage} />
      <Route exact path="/Managementmessage" component={Managementmessage} />
    </BrowserRouter>
  );
}

export default Navigation;
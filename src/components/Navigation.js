import React, { useState } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from 'reactstrap';
import Home from '../pages/Home'
import Aboutus from '../pages/Aboutus'
import Principalmassage from '../pages/Principalmassage'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const Drop = () => {
    document.getElementById("dropdown").style.display = "block";

}
const Dropup = () => {
    document.getElementById("dropdown").style.display = "none";

}
  return (
    <BrowserRouter>
    <div className='mx-auto justify-center flex'>
                    <img src='../favicon.ico' className='hidden fixed md:block mt-2 z-30' alt='logo' />
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
                    <li><Link to='/' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>Director's Massage</Link></li>
                    <li><Link to='/' className='mx-2 font-serif bg-indigo-700 hover:bg-indigo-400 py-2 px-4 items-center flex'>A</Link></li>
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
       
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Aboutus" component={Aboutus} />
                <Route exact path="/Principalmassage" component={Principalmassage} />
    
    </div>
    
    </BrowserRouter>
  );
}

export default Navigation;
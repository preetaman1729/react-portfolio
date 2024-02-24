// # File name: Navbar.tsx
// # Student’s Name: Amanpreet Kaur
// # StudentID: 301308654
// # Date: 23rd February 2024

import '../assets/style.css'
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiMenu, BiLogoGithub } from 'react-icons/bi';
import { useState, useEffect } from 'react';


function Navbar() {
  // keeps track of screen size to make the webpage responsive
    const [isMobile, setIsMobile] = useState(false);

        const toggleMobileNavbar = () => {
            setIsMobile(prev => !prev)
        };

    // toggles the current page highlight
    const [activeItems, setActiveItems] = useState<boolean[]>(() => {
        const storedState = localStorage.getItem('activeItems');
        return storedState ? JSON.parse(storedState): [false,false,false,false,false];
    });

    useEffect(() =>{
        localStorage.setItem('activeItems', JSON.stringify(activeItems));
    }, [activeItems])

    const handleClick = (index: number): void =>{
        setActiveItems(prevActiveItems => {
        const newActiveItems = prevActiveItems.map((_,i)=>i === index);
        localStorage.setItem('activeItems', JSON.stringify(newActiveItems));
        return newActiveItems;
        });

        
    };

    // navbar component

    return (
    <>
    <header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">

      {/* <h1 className="logo me-auto me-lg-0"><a href="index.html">Amanpreet</a></h1> */}
      
      <a href="/" className="logo"><img src="/logo.png" alt="Amanpreet" className="img-fluid"/></a>

      <nav id="navbar" className={`${isMobile ? 'navbar-mobile order-last order-lg-0' : 'navbar order-last order-lg-0'}`}>
        <ul>
          <li><a className={activeItems[0] ? 'active' : ''} onClick={() => handleClick(0)} href="/">Home</a></li>
          <li><a className={activeItems[1] ? 'active' : ''} onClick={() => handleClick(1)} href="/about">About</a></li>
          <li><a className={activeItems[2] ? 'active' : ''} onClick={() => handleClick(2)} href="/services">Services</a></li>
          <li><a className={activeItems[3] ? 'active' : ''} onClick={() => handleClick(3)} href="/project">Projects</a></li>
          <li><a className={activeItems[4] ? 'active' : ''} onClick={() => handleClick(4)} href="/contact">Contact</a></li>
        </ul>


       <BiMenu className='mobile-nav-toggle' onClick={toggleMobileNavbar}></BiMenu>

      </nav>

      <div className="header-social-links">
        <a href="#" className="twitter"><BiLogoTwitter/></a>
        <a href="#" className="facebook"><BiLogoFacebook/></a>
        <a href="#" className="instagram"><BiLogoInstagram/></a>
        <a href="#" className="linkedin"><BiLogoLinkedin/></a>
        <a href="https://github.com/preetaman1729" target="_blank" className="github"><BiLogoGithub/></a>
      </div>

    </div>

  </header>
  
  </>);
}

export default Navbar
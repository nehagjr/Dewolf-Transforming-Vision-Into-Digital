import { useEffect } from 'react';
import navbar1 from '../assets/images/Dewolf.png';
import { Link } from 'react-router-dom';
import "../assets/css/navbar.css"
const Navbar = () => {
  return (
   
  <header id="header" class="header d-flex align-items-center fixed-top">
  <div class="container-fluid container-xl position-relative d-flex align-items-center">

    <a href="#hero" class="logo d-flex align-items-center me-auto">
      <img src={navbar1} alt="" className='logo'/>
    </a>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li><a href="#hero" class="active">Home<br/></a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
    </nav>

    <a class="btn-getstarted flex-md-shrink-0" href="#">Get Started</a>

  </div>
</header>
  );
}

export default Navbar;
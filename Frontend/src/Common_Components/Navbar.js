import React, { useEffect } from 'react';
import navbar1 from '../assets/images/Dewolf.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  useEffect(() => {
    const elemToggleFunc = function (elem) { 
      elem.classList.toggle("active"); 
    }

    const navbar = document.querySelector("[data-navbar]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const navElemArr = [navCloseBtn, navOpenBtn, overlay];

    // Add event listeners only if the elements exist
    if (navbar && navOpenBtn && navCloseBtn && overlay) {
      for (let i = 0; i < navElemArr.length; i++) {
        navElemArr[i].addEventListener("click", function () {
          elemToggleFunc(navbar);
          elemToggleFunc(overlay);
        });
      }
    }

    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    // Add scroll event for sticky header and go-to-top button
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 10) {
        header?.classList.add("active");
      } else {
        header?.classList.remove("active");
      }

      if (window.scrollY >= 800) {
        goTopBtn?.classList.add("active");
      } else {
        goTopBtn?.classList.remove("active");
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      navElemArr.forEach(elem => elem?.removeEventListener("click", () => {}));
      window.removeEventListener("scroll", () => {});
    };
  }, []); // Empty dependency array ensures the effect runs once after render

  return (
    <body id="top">
      <header data-header>
        <div className="overlay" data-overlay></div>
        <div className="container">
          <a href="#" className="logo">
            <img src={navbar1} alt="Dewolf logo" style={{height: "63px"}} />
          </a>

          <button className="nav-open-btn" data-nav-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>
            <button className="nav-close-btn" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <ul className="navbar-list">
              <li className="navbar-item"><a href="#hero" className="navbar-link">Home</a></li>
              <li className="navbar-item"><a href="#service" className="navbar-link">Service</a></li>
              <li className="navbar-item"><a href="#about" className="navbar-link">About</a></li>
              <li className="navbar-item"><a href="#features" className="navbar-link">Features</a></li>
              <li className="navbar-item"><a href="#pricing" className="navbar-link">Pricing</a></li>
              <li className="navbar-item"><a href="#faq" className="navbar-link">FAQ's</a></li>
            </ul>

            <Link to={"/login"}><button className="btn btn-primary">Login</button></Link>
            <Link to={"/register"}><button className="btn btn-primary">Registration</button></Link>
            
          </nav>
        </div>
      </header>

      {/* Add go-to-top button */}
      <button className="go-top-btn" data-go-top>Go to Top</button>
    </body>
  );
}

export default Navbar;

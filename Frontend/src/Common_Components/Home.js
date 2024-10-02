

import heroImg from '../assets/images/hero-img.png';
import video from "../assets/images/pp1.mp4";
import Contect from './Contact';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Project from './Projects';
import Faqs from './Questions';
import Service from './Services';
import Team from './Team';
import "../assets/css/main.css"

const Home = () => {
  return (
    <>
    <Navbar/>
    
<section id="hero" className="hero section">

<div class="container">
  <div class="rowH gy-4">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center hometext">
      <h1 class="fade-up">We offer modern solutions for growing your business</h1>
      <p data-aos="fade-up" >We are team of talented designers making websites with Bootstrap</p>
      <div class="d-flex flex-column flex-md-row" >
        <a href="#about" class="btn-get-started">Get Started <i class="fa-solid fa-arrow-right-long"></i></a>
       <a href={video} type="video/mp4" controls autostart autoPlay  class="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"><i class="fa-regular fa-circle-play"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
      <img src={heroImg} class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
</section>
<Service/>
<Project/>
<Team/>
<Pricing/>
<Faqs/>
<Contect/>

    
  </>
    
  );
};

export default Home;

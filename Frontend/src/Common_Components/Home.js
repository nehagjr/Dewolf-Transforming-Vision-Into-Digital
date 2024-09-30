
import heroImg from '../assets/images/hero-img.png';
import video from "../assets/images/pp1.mp4";

// import "../assets/css/main.css"
const Home = () => {
  return (
    <>
    
<section id="hero" className="hero section">

<div class="container">
  <div class="row gy-4">
    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center ">
      <h1 class="fade-up">We offer modern solutions for growing your business</h1>
      <p data-aos="fade-up" data-aos-delay="100">We are team of talented designers making websites with Bootstrap</p>
      <div class="d-flex flex-column flex-md-row"  data-aos-delay="200">
        <a href="#about" class="btn-get-started">Get Started <i class="fa-solid fa-arrow-right-long"></i></a>;
       <a href={video} type="video/mp4" controls autostart autoPlay  class="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"><i class="fa-regular fa-circle-play"></i><span>Watch Video</span></a>
      </div>
    </div>
    <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
      <img src={heroImg} class="img-fluid animated" alt=""/>
    </div>
  </div>
</div>
</section>
    
  </>
    
  );
};

export default Home;

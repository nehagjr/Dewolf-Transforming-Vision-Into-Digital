import hero from '../assets/images/hero-banner.png'
import Contect from './Contact';
import Subscription from './Subscription';
import Navbar from './Navbar';
import Pricing from './Pricing';
import Service from './Services';
const Home = ()=>{
    return(
      <>
      <Navbar/>
        
      <section class="hero" id="hero">
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 hero-title">Get more sales with SEO, PPC, and Email Marketing</h1>
            <p class="hero-text">
              <span>Free 30 days trial</span>
              <span>Exclusive Support</span>
              <span>No Fees</span>
            </p>

          </div>

          <figure class="hero-banner">
            <img src={hero} alt="Seo illustration"/>
          </figure>

        </div>
      </section>

    <Service/>
    <Pricing/>
    <Subscription/>
    <Contect/>
    
      </>
    )
  }
  export default Home;
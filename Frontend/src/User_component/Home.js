import hero from '../assets/images/hero-banner.png'
const Home = ()=>{
    return(
      <>
        
      <section class="hero" id="hero">
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 hero-title">  we are creative digital service agency </h1>

            

            <p class="hero-text">
              <span>30 days free service </span>
              <span>inclusive cooperation </span>
              <span>there will be no charge till these 30 days </span>
            </p>

          </div>

          <figure class="hero-banner">
            <img src={hero} alt="Seo illustration"/>
          </figure>

        </div>
      </section>

      
      </>
    )
  }
  export default Home;
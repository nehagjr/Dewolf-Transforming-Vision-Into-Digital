import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'

const About = ()=>{
    return(
      <>
        <section class="about" id="about">
        <div class="container">

          <div class="about-top">

            <figure class="about-banner">
              <img src={about1} alt="Seo illustration" />
            </figure>

            <div class="about-content">

              <p class="section-subtitle">quick and secure</p>

              <h2 class="h3 section-title">First page rankings. First name basis</h2>

              <p class="section-text">
                Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna
                dolor luctus and
                egestas sapien egestas vitae nemo volute
              </p>

              <p class="section-text">
                Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna
                dolor luctus and
                egestas sapien egestas vitae nemo volute
              </p>

            </div>

          </div>

          <div class="about-bottom">

            <figure class="about-banner">
              <img src={about2} alt="Seo illustration" />
            </figure>

            <div class="about-content">

              <h3 class="h4 about-bottom-title">Advanced Analytics Review</h3>

              <p class="section-text">
                Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus
                magna dolor
                luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
              </p>

              <h3 class="h4 about-bottom-title">Improve Your Website Ranking Fast</h3>

              <ul class="about-bottom-list">

                <li class="about-bottom-item">
                  <p class="section-text">
                    Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and
                    quaerat
                  </p>
                </li>

                <li class="about-bottom-item">
                  <p class="section-text">
                    Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
                  </p>
                </li>

              </ul>

            </div>

          </div>

        </div>
      </section>
      
      </>
    )
  }
  export default About;
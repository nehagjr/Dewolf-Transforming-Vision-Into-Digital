import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'

const About = ()=>{
    return(
      <>
        <section className="about" id="about">
        <div className="container">

          <div className="about-top">

            <figure className="about-banner">
              <img src={about1} alt="Seo illustration" />
            </figure>

            <div className="about-content">

              <p className="section-subtitle">quick and secure</p>

              <h2 className="h3 section-title">First page rankings. First name basis</h2>

              <p className="section-text">
                Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna
                dolor luctus and
                egestas sapien egestas vitae nemo volute
              </p>

              <p className="section-text">
                Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia laoreet augue luctus magna
                dolor luctus and
                egestas sapien egestas vitae nemo volute
              </p>

            </div>

          </div>

          <div className="about-bottom">

            <figure className="about-banner">
              <img src={about2} alt="Seo illustration" />
            </figure>

            <div className="about-content">

              <h3 className="h4 about-bottom-title">Advanced Analytics Review</h3>

              <p className="section-text">
                Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia laoreet augue and luctus
                magna dolor
                luctus at egestas sapien vitae nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
              </p>

              <h3 className="h4 about-bottom-title">Improve Your Website Ranking Fast</h3>

              <ul className="about-bottom-list">

                <li className="about-bottom-item">
                  <p className="section-text">
                    Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula purus and
                    quaerat
                  </p>
                </li>

                <li className="about-bottom-item">
                  <p className="section-text">
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
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
                Digital Marketing is often compare to 'traditional marketing' suc as magzines , billboards
                and direct mail.
              </p>

              <p className="section-text">
                Digital marketing typically refers to the online marketing campigns that appear on the computer and 
                tablets, phones or other devices..
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
                To help spot new growtth oppurtinites advanced analytics can be used to analysis 
                big data .One of the most common concerns for succesfull business.
              </p>

              <h3 className="h4 about-bottom-title">Improve Your Website Ranking Fast</h3>

              <ul className="about-bottom-list">

                <li className="about-bottom-item">
                  <p className="section-text">
                   Create quality content with the help of the google.
                  </p>
                </li>

                <li className="about-bottom-item">
                  <p className="section-text">
                    Secure high results can reward your journey ..
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
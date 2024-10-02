
import p1 from '../assets/images/project-1.jpg'
import p2 from '../assets/images/project-2.jpg'
import p3 from '../assets/images/project-3.jpg'
import p4 from '../assets/images/project-4.jpg'
import p5 from '../assets/images/project-5.jpg'
import "../assets/css/main.css";
const Project = () => {
  return (
    <>
    <div className='ProjectsContainer' id="projects">
      <section className="section project" id="project" aria-label="project">
        <div className="container">

          <p className="section-subtitle has-before text-center">Projects</p>

          <h2 className="h2 section-title text-center">
            Dewolf complete <span className="has-before">project</span>
          </h2>

          {/* <ul className="filter-list">
            <li>
              <button className="filter-btn active" data-filter-btn>Website</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>Landing Page</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>iOS App</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>Landing Page</button>
            </li>
            <li>
              <button className="filter-btn" data-filter-btn>Branding Design</button>
            </li>
          </ul> */}

          <ul className="grid-list">
            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': '835', '--height': '429' }}>
                  <img src={p1} width="835" height="429" loading="lazy" alt="Book art design" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="https://vivekverma830.github.io/Amazon_Clone_Website-/" className="card-title">Book art design</a>
                  </h3>
                  <a href="#" className="card-tag">Branding</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': '416', '--height': '429' }}>
                  <img src={p2} width="416" height="429" loading="lazy" alt="Graphic Design" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="http://nehagjr.github.io/Dewolf_/" className="card-title1">Graphic Design</a>
                  </h3>
                  <a href="#" className="card-tag">Design</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': '416', '--height': '429' }}>
                  <img src={p3} width="416" height="429" loading="lazy" alt="3d Digital Art" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="https://nehagjr.github.io/Tanishq.github.io/" className="card-title">3d Digital Art</a>
                  </h3>
                  <a href="#" className="card-tag">Design</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': '416', '--height': '429' }}>
                  <img src={p4} width="416" height="429" loading="lazy" alt="Web Design" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="https://nehagjr.github.io/coffee_Shop.github.io/" className="card-title">Web Design</a>
                  </h3>
                  <a href="#" className="card-tag">Design</a>
                </div>
              </div>
            </li>

            <li>
              <div className="project-card">
                <figure className="card-banner img-holder" style={{ '--width': '416', '--height': '429' }}>
                  <img src={p5} width="416" height="429" loading="lazy" alt="Mobile App Design" className="img-cover" />
                </figure>
                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">Mobile App Design</a>
                  </h3>
                  <a href="#" className="card-tag">Design</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    </>
  );
};

export default Project;

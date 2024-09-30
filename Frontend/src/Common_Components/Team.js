import mehak from '../src/assets/images/testimonials/mehak.jpg'
import neha from '../src/assets/images/testimonials/neha.jpg'
import jyoti from '../src/assets/images/testimonials/jyoti.jpg'
import siddharth from '../src/assets/images/testimonials/siddharth.jpg'
import vivek from '../src/assets/images/ testimonials/vivek.jpg'
import "../src/assets/team.css"

const Team = ()=>{
    return(
      <>
    <section className="section-team">
  <div className="container1">
    {/* Start Header Section */}
    <div className="row1 justify-content-center text-center">
      <div className="col-md-8 col-lg-6">
        <div className="header-section">
          <h3 className="small-title">Our Experts</h3>
          <h2 className="title">Let's meet with our team members</h2>
        </div>
      </div>
    </div>
    {/* / End Header Section */}
    <div className="row1">
      {/* Start Single Person */}
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="single-person">
          <div className="person-image">
          <img src={neha} alt="neha"/>
            <span className="icon">
              <i className="fab fa-html5"></i>
            </span>
          </div>
          <div className="person-info">
            <h3 className="full-name">Neha Patel </h3>
            <span className="speciality">co-founder</span>
          </div>
        </div>
      </div>
      {/* / End Single Person */}
      {/* Start Single Person */}
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="single-person">
          <div className="person-image">
          <img src={vivek} alt=" vivek"/>
            <span className="icon">
              <i className="fab fa-wordpress-simple"></i>
            </span>
          </div>
          <div className="person-info">
            <h3 className="full-name">Vivek Verma </h3>
            <span className="speciality">co-founder</span>
          </div>
        </div>
      </div>
      {/* / End Single Person */}
      {/* Start Single Person */}
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="single-person">
          <div className="person-image">
          <img src={siddharth} alt="siddharth"/>
            <span className="icon">
              <i className="fab fa-angular"></i>
            </span>
          </div>
          <div className="person-info">
            <h3 className="full-name">Siddharth Badkur </h3>
            <span className="speciality">co-founder</span>
          </div>
        </div>
      </div>
      {/* / End Single Person */}
      {/* Start Single Person */}
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="single-person">
          <div className="person-image">
          <img src={mehak} alt="mehak"/>
            <span className="icon">
              <i className="fab fa-js"></i>
            </span>
          </div>
          <div className="person-info">
            <h3 className="full-name">Mehak Patel</h3>
            <span className="speciality">co-founder</span>
          </div>
        </div>
      </div>
      {/* / End Single Person */}
      <div className="col-sm-6 col-lg-4 col-xl-3">
        <div className="single-person">
          <div className="person-image">
          <img src={jyoti} alt="jyoti"/>
            <span className="icon">
              <i className="fab fa-js"></i>
            </span>
          </div>
          <div className="person-info">
            <h3 className="full-name">Jyoti Ade </h3>
            <span className="speciality">co-founder</span>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 

      </>
    )
}
export default Team;

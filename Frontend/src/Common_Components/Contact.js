

const Contect = ()=>{
    return(
      <>
    <section id="contact" class="contact section">
<div class="container section-title" data-aos="fade-up">
  <h2  className="fs-2 cont1">Contact</h2>
  <div><h2 className="ad fw-bold">CHECK OUR CONTACT</h2></div>
</div> 
<br></br>

<div class="container" data-aos="fade" data-aos-delay="100">

  <div class="row gy-4">

    <div class="col-lg-4">
      <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
      <i class="fa-solid fa-location-dot"></i>
        <div>
          <h3 className="fs-2 fw-normal ad">Address</h3>
          <p>mp nagar zone 1 font of the multispeciality parking cybrom techlogy pvt lmt bhopal </p>
        </div>
      </div> 

      <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
      <i class="fa-solid fa-phone"></i>
        <div>
          <h3 className="fs-2 fw-normal cal">Call Us</h3>
          <p >+916260500989</p>
        </div>
      </div> 

      <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
      <i class="fa-solid fa-envelope"></i>
        <div>
        <h3 className="fs-2 fw-normal email">email</h3>
          <p >badkursiddharth282@gmail.com</p>
        </div>
      </div> 
    </div>
    <div class="col-lg-8">
      <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div class="row gy-4">

          <div class="col-md-6">
        <input type="text"  name="name" class="form-control" placeholder="Your Name" required=""/>
          </div>
          <div class="col-md-6 ">
        <input type="email"    class="form-control" name="email" placeholder="Your Email" required=""/>
          </div>
          <div class="col-md-12">
        <input type="text" class="form-control"   name="subject" placeholder="Subject" required=""/>
          </div>
          <div class="col-md-12">
            <textarea class="form-control"    name="message" rows="6" placeholder="Message" required=""></textarea>
          </div>

          <div class="col-md-12 text-center">
            <div class="loading"></div>
            <div class="error-message"></div>
            <div class="sent-message"> </div>

            <button type="submit" className="fs-4">Send Message</button>
          </div>

        </div>
      </form>
    </div> 
    </div>
 

  </div>
</section> 
      </>
    )
}
export default Contect ;
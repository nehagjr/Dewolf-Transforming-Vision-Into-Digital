import "../assets/css/service.css"
const Pricing = ()=>{
  return(
    <>
          <section id="pricing" class="pricing section">
         <div class="container section-title" data-aos="fade-up">
        <h5>Pricing ___________________________</h5>
        <h2><span>Check Our</span> <span class="description-title">Pricing</span></h2>
      </div>

<div class="container">

  <div class="row gy-4">

    <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
      <div class="pricing-item">
        <h3>Basic</h3>
        <p class="description">We choose  best plan for you...</p>
        <h4><sup>$</sup>0<span> / month</span></h4>
        <a href="#" class="cta-btn btn btn-outline-success">Start a free trial</a>
        <p class="text-center small">No credit card required</p>
        <ul>
          <li><i class="fa-solid fa-check"></i><span>All Features</span></li>
          <li><i class="fa-solid fa-check"></i> <span>Chat Support </span></li>
          <li><i class="fa-solid fa-check"></i> <span>50 Calls Free </span></li>
          <li class="na"><i class="fa-solid fa-xmark"></i> <span>Mail,Scanning & security</span></li>
          <li class="na"><i class="fa-solid fa-xmark"></i><span>HD quality</span></li>
          <li class="na"><i class="fa-solid fa-xmark"></i> <span>Unlimited users</span></li>
        </ul>
      </div>
    </div>

    <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
      <div class="pricing-item featured">
        <p class="popular">Popular</p>
        <h3>Standard</h3>
        <p class="description">Standard plans for you choosed by our team.....</p>
        <h4><sup>$</sup>29<span> / month</span></h4>
        <a href="#" class="cta-btn btn btn-outline-success">Start a free trial</a>
        <p class="text-center small">No credit card required</p>
        <ul>
          <li><i class="fa-solid fa-check"></i> <span>Vat Features</span></li>
          <li><i class="fa-solid fa-check"></i> <span>Chat,Tickets Supports</span></li>
          <li><i class="fa-solid fa-check"></i> <span>150 Calls Free</span></li>
          <li><i class="fa-solid fa-check"></i> <span>Mail,Scanning & security</span></li>
          <li><i class="fa-solid fa-check"></i> <span>HD quality</span></li>
          <li class="na"><i class="fa-solid fa-xmark"></i> <span>Unlimited users</span></li>
        </ul>
      </div>
    </div>

    <div class="col-lg-4" data-aos="zoom-in" data-aos-delay="300">
      <div class="pricing-item">
        <h3>Advanced</h3>
        <p class="description">Get premiun and advanced facilities....</p>
        <h4><sup>$</sup>49<span> / month</span></h4>
        <a href="#" className="cta-btn btn btn-outline-success">Start a free trial</a>
        <p class="text-center small">No credit card required</p>
        <ul>
          <li><i class="fa-solid fa-check"></i>  <span>All Features</span></li>
          <li><i class="fa-solid fa-check"></i>  <span>Vat Features</span></li>
          <li><i class="fa-solid fa-check"></i>  <span>Unlimited Calls </span></li>
          <li><i class="fa-solid fa-check"></i>  <span>Mailing,Calling,Chats,Tickets Support </span></li>
          <li><i class="fa-solid fa-check"></i>  <span>Unlimited users</span></li>
          <li><i class="fa-solid fa-check"></i> <span>Mail,Scanning & security</span></li>
          <li><i class="fa-solid fa-check"></i>  <span> Ultra HD quality</span></li>
        </ul>
      </div>
    </div>
  </div>

</div>

</section>
   
    </>
  )
}
export default Pricing;
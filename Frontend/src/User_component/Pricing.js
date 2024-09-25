import price from '../assets/images/pricing-banner.png';
const Pricing = ()=>{
  return(
      <>
          <section className="pricing" id="pricing">
           <div className="container">

          <div className="pricing-content">

            <p className="section-subtitle">Easiest to use</p>

            <h2 className="h3 section-title">One brilliant idea for every client</h2>

            <p className="section-text">
              Aliqum mullam blandit tempor sapien gravida at donec ipsum porta justo. Velna vitae auctor and congue
              magna impedit
              luctus dolor volute
            </p>

            <button className="btn btn-primary">Pricing & packages</button>

          </div>

          <figure className="pricing-banner">
            <img src={price} alt="Pricing illustration"/>
          </figure>

        </div>
      </section>

     
                
      <section id="pricing" class="pricing section">

                
    <div class="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Check Our Affordable Pricing<br></br></p>
    </div>

    <div class="container">

        <div class="pricing-row">

            <div class="pricing-item" data-aos="zoom-in" data-aos-delay="100">
                <div class="pricing-tem">
                    <h3 style="color: #20c997;">Free Plan</h3>
                    <div class="price"><sup>$</sup>0<span> / mo</span></div>
                    <div class="icon">
                        <i class="bi bi-box" style="color: #20c997;"></i>
                    </div>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li class="na">Pharetra massa</li>
                        <li class="na">Massa ultricies mi</li>
                    </ul>
                    <a href="#" class="btn-buy">Buy Now</a>
                </div>
            </div>

            <div class="pricing-item" data-aos="zoom-in" data-aos-delay="200">
                <div class="pricing-tem">
                    <span class="featured">Featured</span>
                    <h3 style="color: #0dcaf0;">Starter Plan</h3>
                    <div class="price"><sup>$</sup>19<span> / mo</span></div>
                    <div class="icon">
                        <i class="bi bi-send" style="color: #0dcaf0;"></i>
                    </div>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li class="na">Massa ultricies mi</li>
                    </ul>
                    <a href="#" class="btn-buy">Buy Now</a>
                </div>
            </div>

            <div class="pricing-item" data-aos="zoom-in" data-aos-delay="300">
                <div class="pricing-tem">
                    <h3 style="color: #fd7e14;">Business Plan</h3>
                    <div class="price"><sup>$</sup>29<span> / mo</span></div>
                    <div class="icon">
                        <i class="bi bi-airplane" style="color: #fd7e14;"></i>
                    </div>
                    <ul>
                        <li>Aida dere</li>
                        <li>Nec feugiat nisl</li>
                        <li>Nulla at volutpat dola</li>
                        <li>Pharetra massa</li>
                        <li>Massa ultricies mi</li>
                    </ul>
                    <a href="#" class="btn-buy">Buy Now</a>
                </div>
            </div>

        </div>

    </div>

   </section>   
    </>
  )
}
export default Pricing;

import price from '../assets/images/pricing-banner.png'
const Pricing = ()=>{
  return(
    <>
          <section class="pricing" id="pricing">
        <div class="container">

          <div class="pricing-content">

            <p class="section-subtitle">Easiest to use</p>

            <h2 class="h3 section-title">One brilliant idea for every client</h2>

            <p class="section-text">
              Aliqum mullam blandit tempor sapien gravida at donec ipsum porta justo. Velna vitae auctor and congue
              magna impedit
              luctus dolor volute
            </p>

            <button class="btn btn-primary">Pricing & packages</button>

          </div>

          <figure class="pricing-banner">
            <img src={price} alt="Pricing illustration"/>
          </figure>

        </div>
      </section>
   
    </>
  )
}
export default Pricing;
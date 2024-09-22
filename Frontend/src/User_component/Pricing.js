import price from '../assets/images/pricing-banner.png'
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
   
    </>
  )
}
export default Pricing;
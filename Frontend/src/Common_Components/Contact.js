import "../assets/css/contact.css";

const Contect = () => {
  return (
    <>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h5>Contact ___________________________</h5>
          <h2>
            <span>CHECK OUR</span>{" "}
            <span className="description-title">CONTACT</span>
          </h2>
        </div>
        <br />

        <div className="container" data-aos="fade" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="info-item1 d-flex" data-aos="fade-up">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ width: "90px" }}
                ></i>
                <div>
                  <h3 className="fw-normal ad">Address</h3>
                  <p>
                    MP Nagar Zone 1, in front of the Multispeciality Parking,
                    Cybrom Technology Pvt. Ltd., Bhopal
                  </p>
                </div>
              </div>

              <div className="info-item1 d-flex" data-aos="fade-up">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <h3 className="fw-normal cal">Call Us</h3>
                  <a href="tel:+916260500989">+91 6260500989</a>
                </div>
              </div>

              <div
                className="info-item1 d-flex"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <h3 className="fw-normal email">Email</h3>
                  <p>badkursiddharth282@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading"></div>
                    <div className="error-message"></div>
                    <div className="sent-message"></div>

                    <button type="submit" className="fs-4">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contect;

import insta1 from '../assets/images/insta-post-1.jpg'
import insta2 from '../assets/images/insta-post-2.jpg'
import insta3 from '../assets/images/insta-post-3.jpg'
import insta4 from '../assets/images/insta-post-4.jpg'
import insta5 from '../assets/images/insta-post-5.jpg'
import insta6 from '../assets/images/insta-post-6.jpg'
const Footer=()=>{
    return(
        <>
               <footer class="footerf">
    <div class="containerf">

      <div class="footer-top section footerf">

        <div class="footer-brand">

          <p class="footer-list-title">About Dewolf</p>

          <p class="footer-text footer-link">
            A new way to make the payments<br></br>
             easy, reliable and 100% secure. <br></br>
            Digital Marketing services ..
          </p>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
              <i class="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
              <i class="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
              <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
              <i class="fa-brands fa-twitter"></i>
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Usefull Links</p>
          </li>

          <li>
            <a href="#" class="footer-link">Contact us</a>
          </li>

          <li>
            <a href="#" class="footer-link">How it Works</a>
          </li>

          <li>
            <a href="#" class="footer-link">Create</a>
          </li>

          <li>
            <a href="#" class="footer-link">Explore</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms & Services</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Community</p>
          </li>

          <li>
            <a href="#" class="footer-link">Help Center</a>
          </li>

          <li>
            <a href="#" class="footer-link">Partners</a>
          </li>

          <li>
            <a href="#" class="footer-link">Suggestions</a>
          </li>

          <li>
            <a href="#" class="footer-link">Blog</a>
          </li>

          <li>
            <a href="#" class="footer-link">Newsletters</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Instagram post</p>
          </li>

          <li>
            <ul class="insta-post">

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src={insta1} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover"/>
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src={insta2}width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover"/>
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src={insta3} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover"/>
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src={insta4}width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover"/>
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src={insta5}width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover"/>
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src={insta6} width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover"/>
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

            </ul>
          </li>

        </ul>

      </div>

      <div class="footer-bottom footer2">

        <p class="copyright">
          &copy; 2022 Dewolf. All Rights Reserved by codewithsadee
        </p>

        <ul class="footer-bottom-list ">

          <li>
            <a href="#" class="footer-bottom-link">Terms and conditions</a>
          </li>

          <li>
            <a href="#" class="footer-bottom-link">Privacy policy</a>
          </li>
        </ul>

      </div>

    </div>
  </footer>
        </>
      )
    }
export default Footer;
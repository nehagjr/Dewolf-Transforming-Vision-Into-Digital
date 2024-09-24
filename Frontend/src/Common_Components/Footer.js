import footer1 from '../assets/images/Dewolf.png'
const Footer=()=>{
    return(
        <>
<footer>

<div className="footer-top">
  <div className="container">

    <div className="footer-brand">

      <a href="#" className="footer-logo">
        <img src={footer1} alt="SCEO logo" style={{height: "50px"}}/>
      </a>

     <p className="section-text">
        Aliquam nullam tempor sapien donec and gravida congue an ipsum porta justo velna auctor magna and laoreet
        augue an
        auctor gravida donec
      </p>

    </div>

    <div className="footer-link-box">

      <ul className="footer-list">

        <li>
          <p className="h4">Company</p>
        </li>

        <li>
          <a href="#" className="footer-link">About Us</a>
        </li>

        <li>
          <a href="#" className="footer-link">Careers</a>
        </li>

        <li>
          <a href="#" className="footer-link">Press & Media</a>
        </li>

        <li>
          <a href="#" className="footer-link">Contact Us</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4">Discover</p>
        </li>

        <li>
          <a href="#" className="footer-link">Our Blog</a>
        </li>

        <li>
          <a href="#" className="footer-link">Advertising</a>
        </li>

        <li>
          <a href="#" className="footer-link">Plans & Pricing</a>
        </li>

        <li>
          <a href="#" className="footer-link">Testimonials</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4">Legal</p>
        </li>

        <li>
          <a href="#" className="footer-link">Terms of Use</a>
        </li>

        <li>
          <a href="#" className="footer-link">Privacy Policy</a>
        </li>

        <li>
          <a href="#" className="footer-link">Cookie Policy</a>
        </li>

        <li>
          <a href="#" className="footer-link">Site Map</a>
        </li>

      </ul>

      <ul className="footer-list">

        <li>
          <p className="h4">Support</p>
        </li>

        <li>
          <a href="#" className="footer-link">FAQs</a>
        </li>

        <li>
          <a href="#" className="footer-link">Editor Help</a>
        </li>

        <li>
          <a href="#" className="footer-link">Community</a>
        </li>

        <li>
          <a href="#" className="footer-link">Live Chatting</a>
        </li>

      </ul>

    </div>

  </div>
</div>



<div className="footer-bottom">
  <div className="container">

    <p className="copyright">
      &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
    </p>

    <ul className="social-list">

      <li>
        <a href="#" className="social-link">GitHub</a>
      </li>

      <li>
        <a href="#" className="social-link">Twitter</a>
      </li>

      <li>
        <a href="#" className="social-link">Instagram</a>
      </li>

      <li>
        <a href="#" className="social-link">YouTube</a>
      </li>

    </ul>

  </div>
</div>

</footer>
</>
      )
    }
export default Footer;
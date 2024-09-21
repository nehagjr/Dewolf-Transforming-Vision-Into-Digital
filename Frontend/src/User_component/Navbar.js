import navbar1 from '../assets/images/Dewolf.png'

const Navbar = () => {
  return (
    <>

      <body id="top">



        <header data-header>


          <div class="overlay" data-overlay></div>

          <div class="container">

            <a href="#" class="logo">
            <img src={navbar1} alt="Dewolf logo"  />
                              </a>

            <button class="nav-open-btn" data-nav-open-btn>
              <ion-icon name="menu-outline"></ion-icon>
            </button>

            <nav class="navbar" data-navbar>

              <button class="nav-close-btn" data-nav-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <ul class="navbar-list">

                <li class="navbar-item">
                  <a href="#home" class="navbar-link">Home</a>
                </li>

                <li class="navbar-item">
                  <a href="#service" class="navbar-link">Service</a>
                </li>
                <li class="navbar-item">
                  <a href="#about" class="navbar-link">About</a>
                </li>

                <li class="navbar-item">
                  <a href="#features" class="navbar-link">Features</a>
                </li>

                <li class="navbar-item">
                  <a href="#pricing" class="navbar-link">Pricing</a>
                </li>

                <li class="navbar-item">
                  <a href="#faq" class="navbar-link">FAQ's</a>
                </li>

              </ul>

              <button class="btn btn-primary">Let's Started</button>

            </nav>

          </div>

        </header>

      </body>

    </>
  )
}
export default Navbar;
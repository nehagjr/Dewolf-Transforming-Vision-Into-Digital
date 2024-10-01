// import React from 'react';

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header-content responsive-wrapper">
          <div className="header-logo">
            <a href="#">
              <div>
                <img src="https://assets.codepen.io/285131/untitled-ui-icon.svg" alt="logo icon" />
              </div>
              <img src="https://assets.codepen.io/285131/untitled-ui.svg" alt="logo" />
            </a>
          </div>
          <div className="header-navigation">
            <nav className="header-navigation-links">
              <a href="#"> Home </a>
              <a href="#"> Dashboard </a>
              <a href="#"> Projects </a>
              <a href="#"> Tasks </a>
              <a href="#"> Reporting </a>
              <a href="#"> Users </a>
            </nav>
            <div className="header-navigation-actions">
              <a href="#" className="button">
                <i className="ph-lightning-bold"></i>
                <span>Upgrade now</span>
              </a>
              <a href="#" className="icon-button">
                <i className="ph-gear-bold"></i>
              </a>
              <a href="#" className="icon-button">
                <i className="ph-bell-bold"></i>
              </a>
              <a href="#" className="avatar">
                <img src="https://assets.codepen.io/285131/hat-man.png" alt="avatar" />
              </a>
            </div>
          </div>
          <a href="#" className="button">
            <i className="ph-list-bold"></i>
            <span>Menu</span>
          </a>
        </div>
      </header>
      <main className="main">
        <div className="responsive-wrapper">
          <div className="main-header">
            <h1>Settings</h1>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <i className="ph-magnifying-glass-bold"></i>
              </button>
            </div>
          </div>
          <div className="horizontal-tabs">
            <a href="#">My details</a>
            <a href="#">Profile</a>
            <a href="#">Password</a>
            <a href="#">Team</a>
            <a href="#">Plan</a>
            <a href="#">Billing</a>
            <a href="#">Email</a>
            <a href="#">Notifications</a>
            <a href="#" className="active">Integrations</a>
            <a href="#">API</a>
          </div>
          <div className="content-header">
            <div className="content-header-intro">
              <h2>This is a digital marketing service all over the world</h2>
              <p></p>
            </div>
            <div className="content-header-actions">
              <a href="#" className="button">
                <i className="ph-faders-bold"></i>
                <span>Filters</span>
              </a>
              <a href="#" className="button">
                <i className="ph-plus-bold"></i>
                <span>Request integration</span>
              </a>
            </div>
          </div>
          <div className="content">
            <div className="content-panel">
              <div className="vertical-tabs">
                <a href="#" className="active">View all</a>
                <a href="#">Developer tools</a>
                <a href="#">Communication</a>
                <a href="#">Productivity</a>
                <a href="#">Browser tools</a>
                <a href="#">Marketplace</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "./../assets/adminCSS/adminStyle.css";
import img from "./../assets/images/profile.png"
import logo from "./../assets/images/Dewolf_fav.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuBtnChange = () => {
        const closeBtn = document.getElementById("btn");
        if (isOpen) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        }
    };

    useEffect(() => {
        menuBtnChange();
    }, [isOpen]);

    return (
        <>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="logo-details">
                    
                    <div className="logo_name">Dewolf</div>
                    <i  id="btn" onClick={toggleSidebar}><img src={logo} className="logoSide" alt="Dewolf"/></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <i className='bx bx-search' onClick={toggleSidebar}></i>
                        <input type="text" placeholder="Search..." />
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Dashboard</span>
                        </a>
                        <span className="tooltip">Dashboard</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-user'></i>
                            <span className="links_name">User</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-chat'></i>
                            <span className="links_name">Messages</span>
                        </a>
                        <span className="tooltip">Messages</span>
                    </li>
                    <li>
                        <a href=""> 
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className="links_name">Analytics</span>
                        </a>
                        <span className="tooltip">Analytics</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-folder'></i>
                            <span className="links_name">Files</span>
                        </a>
                        <span className="tooltip">Files</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-cart-alt'></i>
                            <span className="links_name">Order</span>
                        </a>
                        <span className="tooltip">Order</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-heart'></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <span className="tooltip">Saved</span>
                    </li>
                    <li>
                        <a href="">
                            <i className='bx bx-cog'></i>
                            <span className="links_name">Settings</span>
                        </a>
                        <span className="tooltip">Settings</span>
                    </li>
                    <li className="profile">
                        <div class="profile-details">
                            <img src={img} alt="profileImg"/>
                                <div class="name_job">
                                    <div class="name">Neha Patel</div>
                                    <div class="job">Web Developer</div>
                                </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out"></i>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <div className="text">Dashboard</div>
            </section>
        </>
    );
};

export default Navbar;

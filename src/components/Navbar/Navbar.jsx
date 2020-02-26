import React from "react";
import "./Navbar.scss";

const Navbar = () => {
   return(
       <>
        <header className="main_menu">
            <div className="container">
                <div className="row align_items">
                    <div className="col-lg-2">
                        <nav className="navbar navbar-expand-lg">
                            <a href="#" className="navbar-logo">
                                <h2>LOGO</h2>
                            </a>
                            <div className="navbar-collapse main-menu-item justify-content-center collapse">
                                <ul className="navbar-nav align_items">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social_icon"></div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
       </>
   ) 
}

export default Navbar;


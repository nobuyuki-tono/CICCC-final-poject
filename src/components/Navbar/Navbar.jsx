import React from "react";
import "./Navbar.scss";
import "../../themify-icon/themify-icons.css"

const Navbar = () => {
   return(
       <>
        <header className="main_menu">
            <div className="container">
                <div className="row align_items">
                    <div className="col-lg-2">
                        <nav className="navbar navbar-expand-lg">
                            <a href="#" className="navbar-logo">
                                <h3>LOGO</h3>
                            </a>
                            <div className="navbar-collapse main-menu-item justify-content-center collapse">
                                <ul className="navbar-nav align_items">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">about</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social_icon">
                            <a href="#">
                                    <i class=" ti-facebook"></i>
                                </a>
                                <a href="#">
                                    <i class=" ti-twitter-alt"></i>
                                </a>
                                <a href="#">
                                    <i class=" ti-dribbble"></i>
                                </a>
                                <a href="#">
                                    <i class=" ti-instagram"></i>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
       </>
   ) 
}

export default Navbar;


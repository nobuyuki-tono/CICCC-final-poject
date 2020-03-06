import React, { useRef } from "react";
import "./Navbar.scss";
import "../../themify-icon/themify-icons.css"

const Navbar = () => {
    // for fixed menu bar
    // I used window.pageYOffset instead of scrollTop
    window.onscroll = () => {
        let menu = document.getElementsByClassName('main_menu')[0];  
              
        if (window.pageYOffset > 148) {
            menu.classList.add("menu_fixed");
            menu.classList.add("animate");
        } else {
            menu.classList.remove("menu_fixed");
            menu.classList.remove("animate");
        }
      }

    //for using ref
    const navMenu = useRef(null);

    const ToggleNavigation = () => {
        const elem = navMenu.current.classList;
        elem.toggle('show')                
        console.log(navMenu.current)
    }    

   return(
       <>        
        <header className="main_menu">
            <div className="container">
                <div className="row align_items">
                    <div className="col-lg-2">
                        <nav className="navbar navbar-expand-lg">
                            <a href="/" className="navbar-logo">
                                <h3>LOGO</h3>
                            </a>
                            <button className="navbar-toggler" onClick={ToggleNavigation}>
                                <span className="ti-menu"></span>
                            </button>
                            <div ref={navMenu} className="navbar-collapse main-menu-item justify-content-center collapse">
                                <ul className="navbar-nav align_items">
                                    <li className="nav-item">
                                        <a href="#header_part" className="nav-link" onClick={ToggleNavigation}>home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#aboutus" className="nav-link" onClick={ToggleNavigation}>about</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#our_project" className="nav-link" onClick={ToggleNavigation}>works</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#team" className="nav-link" onClick={ToggleNavigation}>team</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#pages" className="nav-link dropdown-toggle" onClick={ToggleNavigation}>pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#form" className="nav-link" onClick={ToggleNavigation}>contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="social_icon">
                            <a href="#">
                                    <i className=" ti-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className=" ti-twitter-alt"></i>
                                </a>
                                <a href="#">
                                    <i className=" ti-dribbble"></i>
                                </a>
                                <a href="#">
                                    <i className=" ti-instagram"></i>
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


import React, { useRef } from "react";
import "./Navbar.scss";
import "../../themify-icon/themify-icons.css"

const Navbar = () => {
    //for using ref
    const navMenu = useRef(null);

    const ToggleNavigation = () => {
        const elem = navMenu.current.classList;
        elem.toggle('show')                
        console.log(navMenu.current)
    }

    // const addClass = (elem) => {
    //     elem.remove('collapse')
    //     elem.add('collapsing')
    //     elem.style.background = 'red';

    //     setTimeout(() => {
    //         if(!elem.contains('collapse')){
    //             elem.remove('collapsing')
    //             elem.add('collapse')
    //             console.log('work!')
    //         }
    //     }, 350)        
    //     console.log('fuck u')
    // }

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
                            <button className="navbar-toggler" onClick={ToggleNavigation}>
                                <span className="ti-menu"></span>
                            </button>
                            <div ref={navMenu} className="navbar-collapse main-menu-item justify-content-center collapse">
                                <ul className="navbar-nav align_items">
                                    <li className="nav-item">
                                        <a href="#header_part" className="nav-link">home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#aboutus" className="nav-link">about</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#service" className="nav-link">service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#blog" className="nav-link">blog</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#pages" className="nav-link dropdown-toggle">pages</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#contact" className="nav-link">contact</a>
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


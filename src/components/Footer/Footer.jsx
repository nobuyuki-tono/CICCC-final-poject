import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <section id="footer">
            <div id="info">
                <div className="compInfo">
                    <h4>Webravo</h4>
                    <div>
                        <i className="compInfoIcon fa fa-map-marker"></i>
                        <p>609 W Hastings St, Vancouver, BC V6B 4W4</p>
                    </div>
                    <div>
                        <i className="compInfoIcon fa fa-phone"></i>
                        <p>(604) 620-1111</p>
                    </div>
                    <div>
                        <i className="compInfoIcon fa fa-envelope"></i>
                        <p>info@webravo.ca</p>
                    </div>
                </div>
                <div className="siteMapInfo">
                    <h4>Site Map</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#form">Contact Us</a></li>
                    </ul>
                </div>
                <div className="snsInfo">
                    <h4>Follow Us on</h4>
                    <ul>
                        <li><a href="#"><i className="snsIcon fa fa-facebook-square"></i></a></li>
                        <li><a href="#"><i className="snsIcon fa fa-twitter-square"></i></a></li>
                        <li><a href="#"><i className="snsIcon fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="snsIcon fa fa-linkedin-square"></i></a></li>
                    </ul>
                </div>
            </div>
            <p id="copyright">Copyright &copy;{new Date().getFullYear()} All rights reserved</p>
        </section>
    );
}

export default Footer;
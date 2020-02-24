import React from "react";

import "./Header.scss";

const Header = () => {

    return (
        <>  
            <section id="header_part">
                <div className="header_container">
                    <div className="row align_items">
                            <div className="offset_left">
                                <div className="header_text">
                                    <div className="header_text_inner">
                                        <h5>We are digital agency</h5>
                                        <h1>Digital and innovative idea</h1>
                                        <a href="#" className="btn_ex_work">Explore work</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
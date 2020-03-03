import React from 'react';
import './Work.scss';

const Work = () => {
    return(
        <>
        <section id="our_project" className="section_padding">
            <div className="container">
                <div className="row justify-content-between align_items">
                    <div className="col-lg-3">
                        <div className="section-title">
                            <p>our project</p>
                            <h2>our projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="filters project_menu_item">
                            <ul>
                                <li>all</li>
                                <li>web design</li>
                                <li>mobile app</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="more_btn">
                            <a href="#" className="more_btn_inner">
                                more projects
                            </a>
                        </div>
                    </div>
                </div>
                <div className="filters-content"></div>
            </div>
        </section>
        </>
    )
}

export default Work;
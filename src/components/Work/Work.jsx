import React, { useRef } from 'react';
import './Work.scss';

const Work = () => {
    //using ref
    const project_type = useRef(null);
    const project_type_2 = useRef(null);
    const project_type_3 = useRef(null);
    let projectArr = [project_type, project_type_2, project_type_3];
    
    const column_1 = useRef(null)
    const column_2 = useRef(null)    
    
    const toggleProject = (key, colum) => {
        const isColumnSame = column_1 === colum;
        
        projectArr.reduce((acc, cur) => cur.current.classList.remove('active'), 0)
        projectArr.filter( pt => pt.current === key.current).reduce((acc, cur) => cur.current.classList.add('active') , 0)

        isColumnSame ? column_2.current.classList.add('hide') : column_2 === colum ? column_1.current.classList.add('hide') : column_1.current.classList.remove('hide');
        isColumnSame ? column_1.current.classList.remove('hide') : column_2.current.classList.remove('hide');
    }

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
                                <li className="active" ref={project_type} onClick={() => toggleProject(project_type)}>all</li>
                                <li ref={project_type_2} onClick={() => toggleProject(project_type_2, column_1)}>web design</li>
                                <li ref={project_type_3} onClick={() => toggleProject(project_type_3, column_2)}>mobile app</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="more_btn d-none d-md-block">
                            <a href="#" className="more_btn_inner">
                                more projects
                            </a>
                        </div>
                    </div>
                </div>
                <div className="filters-content">
                    <div className="row justify-content-between">
                        <div ref={column_1} className="col-lg-6" style={{display: ''}}>
                            <div className="single_our_project">
                                <div className="single_offer">
                                    <img src="https://placehold.jp/555x410.png" alt=""/>
                                    <div className="hover_text">
                                        <p>Web design</p>
                                        <a href="#web-design">
                                            <h2>Web design & development</h2>
                                        </a>
                                    </div>
                                </div>                               
                            </div>               
                        </div>
                        <div ref={column_2} className="col-lg-7" style={{display: ''}}>
                        <div className="single_our_project">
                                <div className="single_offer">
                                    <img src="https://placehold.jp/556x411.png" alt=""/>
                                    <div className="hover_text">
                                        <p>Mobile app</p>
                                        <a href="#mobile-app">
                                            <h2>Mobile app & development</h2>
                                        </a>
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Work;
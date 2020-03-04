import React, { useRef } from 'react';
import './Work.scss';

const Work = () => {
    //for using ref
    const project_type = useRef(null);
    const project_type_2 = useRef(null);
    const project_type_3 = useRef(null);

    let projectArr = [project_type, project_type_2, project_type_3];
    
    console.log('array: ', projectArr)
    const toggleProject = () => {

        for(let i = 0; i < projectArr.length; i++) {
            projectArr[i].current.classList.remove('active')
        }

        console.log("1: ", project_type)
        console.log("2: ", project_type_2)
        console.log("3: ", project_type_3)
        // if(elem.contains('active')) {
            
        // }else {
        //     elem.add('active')
        // }
        // console.log(project_type.current)
    }
    function toggleProject2(param) {
        console.log('aaaaaa')
        console.log('param', param)
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
                                <li  onClick={() => toggleProject2(this)}>all</li>
                                <li ref={project_type_2} onClick={toggleProject}>web design</li>
                                <li className="active" ref={project_type_3} onClick={toggleProject}>mobile app</li>
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
                <div className="filters-content"></div>
            </div>
        </section>
        </>
    )
}

export default Work;
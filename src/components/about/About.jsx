import React from 'react';
import './About.css';

import AboutImage from './about.png'

function About() {
return (
    <div>

        <div className="about-info">

            <h1>Start Your New Advantage <br /> <span className="aboutHeading">Around The World</span> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at possimus ea commodi laboriosam corporis sint cupiditate. Sed vitae laborum, veniam, sapiente laboriosam assumenda facilis impedit accusamus nesciunt ab eveniet?</p>

            <img src={AboutImage} alt="" />
        
        </div>

    </div>
)
}

export default About
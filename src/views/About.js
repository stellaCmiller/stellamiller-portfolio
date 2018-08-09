import React from 'react';
import aboutpic from '../images/StellaMiller.jpg';

class About extends React.Component {
    render(){
        return <div className="row justify-content-center align-items-center full-col">
            <div className="offset-lg-3 col-md-9">
                <div className="row">
                    <div className="col-md-4">
                        <img src={aboutpic} alt="Stella" className="rounded img-fluid about-img" />
                    </div>
                    <div className="col-md-8">
                        <div id="about-container">
                            <h2>Developer, Learner, Explorer</h2>
                            <p>My main goal in life is to never stop learning new things and going new places. I'm a December
                                2017 graduate of the University of Texas at Austin with a B.A. in Latin Language and a minor
                                in Chemistry, and now I'm a student of the coding bootcamp at UT Austin. While my skills now are centered around
                                fullstack engineering, I ALWAYS go above and beyond expectations for every project I work on, and I'm willing to learn anything. </p>
                            <div className="skills">
                                <h3>My Current Skillset: </h3>
                                <p>HTML5, CSS3, Bootstrap4, Javascript, jQuery, React.js, AJAX, firebase, GIT/Github, node.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default About;
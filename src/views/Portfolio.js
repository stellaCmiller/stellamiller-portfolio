import React from 'react';
import p1 from '../images/SandDuneThumbnail.png'
import p2 from '../images/wizard.png'
import p3 from '../images/marioQuestionMarkBlock.jpg'
import p4 from '../images/giphy.PNG'
import p5 from '../images/rps.PNG'
import p6 from '../images/displayStock.PNG'
import runAnimations from '../animations';

class Portfolio extends React.Component {
    componentDidMount(){
        runAnimations();
    }
    render(){
        return <div className="row justify-content-center align-items-center full-col">
            <div className="offset-lg-3 col-md-9">
                <div className="row align-items-center">
                    <div className="col-md-4 test-class" align="center" projectid="1">
                        <div className="thumbnail">
                            <img alt = "project1" src={p1} className="rounded img-fluid portfolio-img" />
                            <h3 className="caption">Hangman</h3>
                        </div>
                    </div>
                    <div id="1" className="description" github="https://github.com/stellaCmiller/Hangman-Game" deployed="https://stellacmiller.github.io/Hangman-Game/">
                        <p>This game of desert themed hangman features original pixel art and 3 difficulty settings. The logic is written in 100% native javascript.</p>
                    </div>
                    <div className="col-md-4 test-class" align="center" projectid="2">
                        <div className="thumbnail">
                            <img alt = "project2" src={p2} className="rounded img-fluid portfolio-img" />
                            <h3 className="caption">Pixel RPG</h3>
                        </div>
                    </div>
                    <div id="2" className="description" github="https://github.com/stellaCmiller/unit-4-game" deployed="https://stellacmiller.github.io/unit-4-game/">
                        <p>Fight for justice! Select from 1 of 4 fighters and battle against the others. Each fighter is created from an object constructor, and the logic relies heavily on JQuery for DOM manipulation. Be sure to pay attention to the amount of damage you're doing to figure out the trick to win with any character.</p>
                    </div>
                    <div className="col-md-4 test-class" align="center" projectid="3">
                        <div className="thumbnail">
                            <img  alt = "project3" src={p3} className="rounded img-fluid portfolio-img" />
                            <h3 className="caption">Trivia</h3>
                        </div>
                    </div>
                    <div id="3" className="description" github="https://github.com/stellaCmiller/trivia-game" deployed="https://stellacmiller.github.io/trivia-game/">
                        <p>This 10-question quiz game displays heavy use of object oriented design principles as well as a shuffling algorithm to randomize the questions and answer choices. Each question has a time limit, so don't take too long!</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4 test-class" align="center" projectid="4">
                        <div className="thumbnail">
                            <img alt = "project4" src={p4} className="rounded img-fluid portfolio-img" />
                            <h3 className="caption">Gif Search</h3>
                        </div>
                    </div>
                    <div id="4" className="description" github="https://github.com/stellaCmiller/giphy-app" deployed="https://stellacmiller.github.io/giphy-app/">
                        <p>Uses the giphy API to display gifs from a preset of topics that the user can add to. Gifs start out still in order to improve load time, and become animated on click.</p>
                    </div>
                    <div className="col-md-4 test-class" align="center" projectid="5">
                        <div className="thumbnail">
                            <img alt = "project5" src={p5} className="rounded img-fluid portfolio-img" />
                            <h3 className="caption">RPS Smash</h3>
                        </div>
                    </div>
                    <div id="5" className="description" github="https://github.com/stellaCmiller/rps-online" deployed="https://stellacmiller.github.io/rps-online/">
                        <p>Play classic rock paper scissors with anyone all over the world! The Firebase realtime database updates your score and position in the queue instantly.</p>
                    </div>
                    <div className="col-md-4 test-class" align="center" projectid="6">
                        <div className="thumbnail">
                            <img alt = "project6" src={p6} className="rounded img-fluid portfolio-img" />
                            <h3 className="caption">Bamazon</h3>
                        </div>
                    </div>
                    <div id="6" className="description" github="https://github.com/stellaCmiller/bamazon" deployed="#">
                        <p>A Node.js and MySQL CLI marketplace featuring customer, manager, and owner commands such as purchasing items, viewing low inventory and adding new products, and viewing total sales by department. NOTE: No deployed version exists, please check the github readme file for execution instructions.</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Portfolio;
import React from 'react';
import star from '../images/star.svg'
import p1 from '../images/CarouselUT.jpg'
import p2 from '../images/CarouselStockPhoto2.jpg'
import p3 from '../images/SanDiegoComicCon.jpg'

class Home extends React.Component{
    render(){
        return <div>
            <div className="row align-items-center justify-content-center full-col">
                <div className="title-card offset-lg-3 col-md-9 " align="center">
                    <h1 className="title">Stella Miller</h1>
                    <img className="star-icon" src={star} alt="star-icon"/>
                    <h2>Web Developer</h2>
                    <br/>
                    <h3>This site is now an SPA powered by React! I'm always updating this site; please come back regularly to see the changes!</h3>
                </div>
            </div>
            <div id="landing-bg" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 d-block header-img" src={p1} alt="slide1"/>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 d-block header-img" src={p2} alt="slide2"/>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100 d-block header-img" src={p3} alt="slide3"/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Home;
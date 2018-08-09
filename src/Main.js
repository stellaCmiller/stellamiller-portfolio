import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

class Main extends React.Component {
    render() {
        return <div>
            <Navbar/>
            <Footer />
        </div>
    }
}

export default Main;


import React, { Component } from 'react';
import './Home.css';
import HomeDisplay from './HomeDisplay';
import About from './About'
import Temario from './Temario';
import News from './News';
import Footer from '../footer/Footer';

class Home extends Component {

    render() {
        return (
            <div>
                <HomeDisplay />
                <About />
                <Temario />
                <News />
                <Footer />
            </div>
        );
    }
}

export default Home;
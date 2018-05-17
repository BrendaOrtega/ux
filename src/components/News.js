import React, { Component } from 'react';
import './Home.css';
import partners from '../assets/image.png';

class News extends Component {

    render() {
        return (
            <div className="news">
                <h2>Nuestros egresados han sido contratados en empresas como:</h2>
                <br/>
                <img src={partners} alt=""/>
            </div>
        );
    }
}

export default News;
import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="fli">
                    <div className="box_ft">
                        <h3>Sobre Ironhack</h3>
                        <Link to="https://www.ironhack.com/es/equipo" target="blank">
                            <p>Equipo</p>
                        </Link>
                        <Link to="https://ironhack.recruitee.com/" target="blank">
                            <p>Trabaja con nosotros</p>
                        </Link>
                        <Link to="http://blog.ironhack.com/es/">
                            <p>Blog</p>
                        </Link>
                        <Link to="https://www.ironhack.com/es/prensa">
                            <p>Prensa</p>
                        </Link>
                    </div>
                    <div className="box_ft">
                        <h3>Síguenos en</h3>
                        <Link to="https://twitter.com/ironhackMEX" target="blank">
                            <FontAwesome name="twitter"/>
                        </Link>
                        <Link to="https://www.facebook.com/ironhackMEX/" target="blank">
                            <FontAwesome name="facebook"/>
                        </Link>
                        <Link to="https://www.instagram.com/ironhackmex/" target="blank">
                            <FontAwesome name="instagram"/>
                        </Link>
                        <Link to="https://github.com/ironhack" target="blank">
                            <FontAwesome name="github"/>
                        </Link>
                        <Link to="https://www.youtube.com/channel/UCWD3Q1-d9vzxt1cXUmpbjqg" target="blank">
                            <FontAwesome name="youtube"/>
                        </Link>

                    </div>
                    <div className="box_ft">
                        <h3>Contáctanos</h3>
                        <p>contactomex@ironhack.com</p>
                        <p>55 30 391 903</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import temario from '../assets/syllabus_uxui.pdf';

class HomeDisplay extends Component {

    render() {
        return (
            <div>
                <div className="slide">
                    <div className="cover">
                        <div>
                            <img className="logo" src="" alt=""/>
                            <h1>UX/UI Design <br/> Bootcamp</h1>
                            <span>11 Jun - 10 Aug</span>
                            <br/>
                            <p>Ciudad de México</p>
                            <br/>
                            <a href={temario} target="blank">
                                <button className="btn_aplicar">Descargar temario</button>
                            </a>
                            <Link to="https://www.ironhack.com/es/cursos/curso-ux-ui-design/aplicar/curso/59db5a5a96a9f6001860998a" target="blank">
                                <button className="btn_aplicar">Aplicar ahora</button>
                            </Link>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default HomeDisplay;
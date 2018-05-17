import React, { Component } from 'react';
import './Home.css';
import { Carousel } from 'antd';

class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="flex">
                    <div className="box_about">
                        <h2>¿Porqué aprender UX/UI?</h2>
                        <p>En el bootcamp de UX/UI aprenderás las técnicas del Design Thinking y User Centered Design,
                            prototipado con Sketch e InVision, frameworks de testing, además de las mejores prácticas para el desarrollo
                            e implementación de tus diseños y transmitirlos a desarrolladores y otros skateholdres, y por último HTML, CSS y Boostrap, para llevar tus diseños a la realidad.
                        </p>
                    </div>
                    <div className="box_about owl">
                        <div className="">
                            <Carousel  autoplay>
                                <div>
                                    <div className="im uno" >
                                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/32419250_1631826413579407_7259063972320509952_o.jpg?_nc_cat=0&oh=f953205bf85d4e2c9c9d3dae0fcd73cc&oe=5B7DA7F4" alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="im dos">
                                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/32381104_1631824203579628_3721499251138625536_n.jpg?_nc_cat=0&oh=bb89cd74f59e7cf127b70642017d69c6&oe=5B885397" alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <div className="im tres" >
                                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/32645969_1631816283580420_6781336490858250240_o.jpg?_nc_cat=0&oh=04a28d84701ef3c030f359b3f39a6889&oe=5B96BFE6" alt=""/>
                                    </div>
                                </div>
                         
                            </Carousel>
                        </div>
                    </div>

                </div>
                {/*<div className="fl">*/}
                    {/*<div className="info_box">*/}
                        {/*<h3>Cambio Profesional</h3>*/}
                        {/*<br/>*/}
                        {/*<p>¿Quieres cambiar tu carrera? El curso de UX/UI Design de Ironhack es*/}
                            {/*la solución de profesionales que quieren dar un giro hacia una de*/}
                            {/*las carreras más demandadas y con más crecimiento de la industria tecnológica.*/}
                          {/*</p>*/}
                    {/*</div>*/}
                    {/*<div className="info_box">*/}
                        {/*<h3>Desarrolladores Web y Móvil</h3>*/}
                        {/*<p>Aprender diseño UX/UI es un gran complemento para quién ya sabe programar.*/}
                            {/*Aprende a desarrollar con mejor diseño de experiencia de usuario antes de*/}
                            {/*saltar a la fase de programación y así podrás convertirte en un profesional*/}
                            {/*fullstack del mundo digital.</p>*/}

                    {/*</div>*/}
                    {/*<div className="info_box">*/}
                        {/*<h3>Emprendedores</h3>*/}
                        {/*<br/>*/}
                        {/*<p>Para cualquiera que desee diseñar su propia aplicación web o móvil.*/}
                            {/*Este bootcamp te enseñará cómo responder a las necesidades de tus*/}
                            {/*usuarios a través de research y testing por medio de prototipos.*/}
                            {/*Así podrás construir un producto mejor para tu empresa.</p>*/}
                    {/*</div>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default About;
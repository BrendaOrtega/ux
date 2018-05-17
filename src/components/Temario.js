import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Temario extends Component {

    render() {
        return (
            <div className="temario">
                <h2>Contenido del Curso</h2>
                <p>Este curso inmersivo de 9 semanas esta dirigido a principiantes sin
                experiencia previa en diseño o experiencia técnica, en donde al final desarrollarán
                    una idea de producto aplicando todos los conocimientos adquiridos.</p>
                <div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 1</p>
                            <h3>GV Design Sprint</h3>
                        </div>
                        <div className="info">
                            <p><FontAwesome name="adjust" /> Trazar el problema y elegir el enfoque</p>
                            <p> <FontAwesome name="adjust" /> Soluciones de bocetos en papel</p>
                            <p> <FontAwesome name="adjust" /> Desarrollar un prototipo de alta fidelidad para
                                probarlo con usuarios</p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 2</p>
                            <h3>UX, Information Architecture</h3>
                        </div>
                        <div className="info">
                            <p><FontAwesome name="adjust" /> Introducción a la investigación de diseño UX</p>
                            <p> <FontAwesome name="adjust" /> Frameworks de arquitectura de la información (IA) </p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 3</p>
                            <h3>User interface, IxD</h3>
                        </div>
                        <div className="info">
                            <p><FontAwesome name="adjust" /> Principios y metodologías de Diseño de interacción para crear experiencias </p>
                            <p> <FontAwesome name="adjust" /> Wireframes y prototipos interactivos </p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 4</p>
                            <h3>User interface, IxD</h3>
                        </div>
                        <div className="info">
                            <p><FontAwesome name="adjust" /> Principios y metodologías de User Interface Design</p>
                            <p> <FontAwesome name="adjust" /> Tipografía, color, diseños y jerarquía visual </p>
                            <p><FontAwesome name="adjust" /> Mood boards y style tiles </p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 5</p>
                            <h3>Design Systems, Business of Design</h3>
                        </div>
                        <div className="info">
                            <p> <FontAwesome name="adjust" /> Atomic Design y guías de estilo</p>
                            <p> <FontAwesome name="adjust" /> Metodologías de trabajo</p>
                            <p> <FontAwesome name="adjust" /> Responsive Landing Pages</p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 6</p>
                            <h3>Front-end: HTML, CSS, Bootstrap</h3>
                        </div>
                        <div className="info">
                            <p> <FontAwesome name="adjust" /> Fundamentos del Front-end</p>
                            <p> <FontAwesome name="adjust" /> Desarrollo y prototipado rápido con HTML y CSS, y frameworks (Bootstrap / Foundation)</p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 7 y 8</p>
                            <h3>Final Project</h3>
                        </div>
                        <div className="info">
                            <p> <FontAwesome name="adjust" /> Aplicación de todo lo aprendido en el curso
                                en un proyecto personal de su interés. Con las habilidades recién adquiridas los estudiantes podrán
                                hacer un mejor producto, o enfrentarse a una experiencia de usuario desafiante.
                                Esto conducirá a crear un producto que
                                sigue todo el proceso UX: usuario
                                investigación, arquitectura de la información, usuario
                                diseño de interfaz e interacción ...
                                Además, tendrán la oportunidad de recibir
                                1 a 1 tutoría de expertos de la industria
                                durante estas dos semanas, y terminarán
                                con un prototipo interactivo que
                                se presentará como su proyecto final.
                            </p>
                        </div>

                    </div>
                    <div className="flexi">
                        <div className="week">
                            <p>Semana 9</p>
                            <h3>Career Prep and Hiring Week </h3>
                        </div>
                        <div className="info">
                            <p> <FontAwesome name="adjust" /> Coaching profesional</p>
                            <p> <FontAwesome name="adjust" /> Preparación de trabajo</p>
                            <p> <FontAwesome name="adjust" /> Eventos de Networking</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Temario;
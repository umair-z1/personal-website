import { React, useRef } from 'react';
import './App.css';
import linkedin from './resources/linkedin.png'
import github from './resources/github.png'
import about from './resources/about.png'
import shapes from './resources/shapes.png'
import { motion } from "framer-motion";

function App() {

    const aboutref = useRef()
    const deindicaref = useRef()

    return (
        <>
        <div className="App-Container">
            <div className="App">
                <h1 className="name-text">umair amin</h1>
                <div className="icons">


                    <Icon
                        link="https://github.com/umair-z1"
                        image={github}
                        name="github" />


                    <Icon
                        link="http://www.linkedin.com/in/umair-amin-t"
                        image={linkedin}
                        name="linkedin" />


                    <div className="icon" id="project">
                        <motion.button
                            className="motion-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deindicaref.current.scrollIntoView({behavior: "smooth"})}
                        >
                            <img className="icon-image" src={shapes} alt="projects" />
                        </motion.button>
                        <p className="icon-text">projects</p>
                    </div>


                    <div className="icon" id="about">
                        <motion.button
                            className="motion-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => aboutref.current.scrollIntoView({behavior: "smooth"})}
                        >
                            <img className="icon-image" src={about} alt="about" />
                        </motion.button>
                        <p className="icon-text">about</p>
                    </div>


                </div>
            </div>
        </div>
        <div className="purple-page" ref={aboutref}>
            <div className="about-title">
                About Me
            </div>
            <div className="about-body">
                Hello, my name is Umair. I am a third year Computer Science student at Georgia Institute of Technology with 
                threads/concentrations in information internetworks and intelligence. I am currently pursuing a career in software
                engineering because I enjoy the creative challenge of transforming ideas into functional applications that can
                postively impact someone. I am particularly interested in full-stack development - from designing user interfaces
                and experiences to building robust back-end systems and databases. What drives me forward is being able to see how
                each component of a program works and fits into a cohesive whole.
            </div>
        </div>
        <div className="gray-page" ref={deindicaref}>
            <div className="about-title">
                Deindica
            </div>
            <div className="about-body">
                Deindica is a full-stack application in which users can boost their math and problem-solving skills. Users can select
                a subject that they want to learn, and they will be given problems in accordance with their skill levels. The skill
                level is determined by a dynamic rating system, in which a user is put against a problem, and both the problem and user
                ratings are adjusted based on the answer that the user gave. I have partnered up with the University of Texas at Dallas
                math club's former president to create several problems. We also gave access to some of the math club students so that
                they could test Deindica and give feedback.
            </div>
            <div className="about-body">
                Status: Development complete, not yet published
            </div>
        </div>
        </>
    );
}

function Icon(props) {
    return (
        <a className="icon" id={props.name} href={props.link} target="_blank" rel="noreferrer">
            <motion.button
                className="motion-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                >
                <img className="icon-image" src={props.image} alt={props.name} />
            </motion.button>
            <p className="icon-text">{props.name}</p>
        </a>
    )
}

export default App;
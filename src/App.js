import React from 'react';
import './App.css';
import linkedin from './resources/linkedin.png'
import github from './resources/github.png'
import about from './resources/about.png'
import { motion } from "framer-motion";

function App() {

    const [showAbout, setShowAbout] = React.useState(false);
    const [initial, setInitial] = React.useState(true);
    const toggleAbout = () => {setInitial(false); setShowAbout(!showAbout);}

    return (
        <div className="App-Container">
            <div className={("About " + (initial ? "" : (showAbout ? "FadeIn" : "FadeOut")))} onClick={toggleAbout}>
                <div className="about-container">
                    <div className='about-text'>Hello! My name is Umair and I am a junior studying computer science at Georgia Tech.</div>
                    <motion.button className='about-backArrow'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>← </motion.button>
                </div>
            </div>
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
                    <div className="icon" id="about">
                        <motion.button
                            className="motion-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleAbout}
                        >
                            <img className="icon-image" src={about} alt="email" />
                        </motion.button>
                        <p className="icon-text">about</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Icon(props) {
    return (
        <a className="icon" id={props.name} href={props.link}>
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

// function Backdrop({children, onClick}) {
//     return (
//         <motion.div
//             className="backdrop"
//             onclick={onClick}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit= {{ opacity: 0 }} >
//             {children}
//         </motion.div>
//     );
// }

export default App;
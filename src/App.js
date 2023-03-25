import React from 'react';
import './App.css';
import linkedin from './resources/linkedin.png'
import github from './resources/github.png'
import email from './resources/email.png'
import { motion } from "framer-motion";

function App() {
    return (
        <div className="App-Container">
            <div className="App">
                <FadeIn>
                    <h1 className="name-text">umair amin</h1>
                </FadeIn>
                <div className="icons">
                    <Icon
                        link="https://github.com/umair-z1"
                        image={github}
                        name="github" />
                    <Icon
                        link="http://www.linkedin.com/in/umair-amin-t"
                        image={linkedin}
                        name="linkedin" />
                    <div className="icon">
                        <motion.button
                            className="motion-button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => alert("Coming Soon!")}
                        >
                            <img className="icon-image" src={email} alt="email" />
                        </motion.button>
                        <p className="icon-text">contact</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FadeIn({ children }) {
    return (
        <motion.div
            intial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            // transition={{
            //     visible: {opacity: 1, scale: 1},
            //     hidden: {opacity: 0, scale: 0}
            // }}
            >
            { children }
        </motion.div>
    )
}

function Icon(props) {
    return (
        <a className="icon" href={props.link}>
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
import React from 'react';
import '../App.css';
import Pdf from "./ScottWillrichResume.pdf";


const Footer = ({ icon, title }) => {
    return (
        <footer className="footer mt-2 mb-3">
            <div className="container">
                <p className="lead text-center">Scott Willrich</p>
            </div>
            <div className="d-flex justify-content-around mb-5">
                <a href="mailto:swillrich@gmail.com">swillrich@gmail.com</a>
                <a href="https://github.com/swillrich5">GitHub</a>
                <a href="https://www.linkedin.com/in/scott-willrich/">LinkedIn</a>
                <a href={Pdf}>Resume</a>
            </div>
        </footer>
    )
}

export default Footer;
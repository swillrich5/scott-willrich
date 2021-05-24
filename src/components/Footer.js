import React from 'react';
import DownloadLink from "react-download-link";
import '../App.css';


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
                <DownloadLink style={{color: "#D4F1F1"}}
                    label='Resume'
                    filename="ScottWillrichResume.pdf"
                    exportFile={() => Promise.resolve("My cached data")}
                />
            </div>
        </footer>
    )
}

export default Footer;
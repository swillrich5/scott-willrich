import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Footer = ({ icon, title }) => {
    return (
        <footer className="footer">
            <div className="container">
            <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>
    )
}

export default Footer;
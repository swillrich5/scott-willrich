import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ icon, title }) => {
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <h1 className='navbar-brand pl-3'><i className={icon}></i> {title}</h1>
          </div>
          <div>
            <ul className="nav">
              <li className="nav-item">
                <Link to='/' className="nav-link">About</Link> 
              </li>
              <li className="nav-item">
                <Link to='/portfolio' className="nav-link">Portfolio </Link>              
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }


  Navbar.defaultProps = {
    title: 'Scott Willrich',
    icon: 'fas fa-laptop-code'
  }

  export default Navbar;
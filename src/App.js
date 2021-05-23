import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
          <Router>
            <Navbar />
            <Footer />
          </Router>
        </div>
    );
}

export default App;

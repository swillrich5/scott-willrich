import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';


function App() {
    return (
      <Router>
          <div className="App">
            <Navbar />
            <div className="container-fluid body-background fill">
              <Switch>
                  <Route exact path="/" component={About} />
                  <Route exact path="/Portfolio" component={Portfolio} />
                  <Route exact path="/Contact" component={Contact} />
              </Switch>
            </div>
            <Footer />
        </div>
      </Router>
    );
}

export default App;

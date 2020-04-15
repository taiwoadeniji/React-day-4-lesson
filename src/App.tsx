import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
//import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {
  componentWillUnmount ()
{
  console.log('"componentWillUnmount()" ran.');
}
  render()
  {
    const ourURL = useRouterMatch();
    return (
      <div className="App">
        <h1>React Day 4</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to={`${ourURL.path}`}>Homepage</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/"><Home /> </Route> {/* You can place other elements/classes/components/tags here too */}
            <Route path="/about"><About /> </Route>
            <Route path="/services"><Services /> </Route>
            <Route path="/contact"><Contact /> </Route> 
           </Switch>
        </Router>
      </div>
    );
  }
}

export default App;


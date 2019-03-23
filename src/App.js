import React, { Component } from 'react';
import background from './images/quote-background2.jpg';
import Header from './components/Header';
import Gallery from './components/Gallery';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container picgradient">
          <img src={background} className="background-img" alt="background-img"/>
          <blockquote className="quote">
            <p>
              "A dog will teach you unconditional love.<br/> 
              If you can have that in your life, <br/>
              things won't be too bad."
            </p>
            <cite>&mdash;Robert Wagner</cite>
          </blockquote>
        </div>
        <Gallery />
        <footer className="site-footer">
          <span>
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter-square"></i>
          </span>
          <p>Built by <a href="https://github.com/nachomacaso" className="footer-link">Nathan Macaso</a> for Asana.</p>
        </footer>
      </div>
    );
  }
}

export default App;

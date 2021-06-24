import React from 'react';
import {Component} from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar is-transparent extra-design">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
              </a>
              <div class= "Home" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                <h3>Home</h3>
                
              </div>
            </div>
            
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="bd-tw-button button is-link" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://bulma.io">
                        <span className="icon">
                          <i className="fab fa-twitter"></i>
                        </span>
                        <span>
                          Login
                        </span>
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-primary" href="https://bulma.io">
                        <span className="icon">
                          <i className="fas fa-download"></i>
                        </span>
                        <span>Sign up</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
          </nav>

        )}};
    
export default Navbar;
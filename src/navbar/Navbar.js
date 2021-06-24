import React from 'react';
import {Component} from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav class="navbar is-transparent">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
              </a>
              <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="bd-tw-button button is-link" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://bulma.io">
                        <span class="icon">
                          <i class="fab fa-twitter"></i>
                        </span>
                        <span>
                          Login
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-primary" href="https://bulma.io">
                        <span class="icon">
                          <i class="fas fa-download"></i>
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
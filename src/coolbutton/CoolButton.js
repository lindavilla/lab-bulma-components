import React from 'react';
import {Component} from 'react';
import 'bulma/css/bulma.css';
import './CoolButton.css';

class CoolButton extends Component {
    render(props){
        return (
<button className={this.props.className}>{this.props.children}</button>
         )}};

export default CoolButton;
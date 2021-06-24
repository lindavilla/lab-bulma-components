import React from 'react';
import {Component} from 'react';
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/formField';
import CoolButton from '../coolbutton/CoolButton';

class Signup extends Component {
    render() {
        return (
            <>
            <Navbar />
            <FormField label="Name" type="text" placeholder="John Doe"/>
            <FormField label="Email" type="Email" placeholder="hello@email.com"/>
            <FormField label="Password" type="Password" placeholder="xxxxxxx"/>
                <CoolButton className="button is-primary">
                    Signup
                </CoolButton>

        </>
        )}};

export default Signup;
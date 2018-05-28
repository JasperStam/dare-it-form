import React, { Component } from 'react';

export default class Form extends Component {
    handleSubmit() {
        console.log('TODO submit');
    }
    render() {
        return (
            <form>
                <h1>Fill in the form</h1>
                <label>
                    Your name
                    <input />
                </label>
                <label>
                    Your email address
                    <input />
                </label>
            </form>
        );
    }
}

import React, { Component } from 'react';
import { Background, Container } from '../components';
import Form from './Form';

export default class App extends Component {
    render() {
        return (
            <Background>
                <Container>
                    <Form />
                </Container>
            </Background>
        );
    }
}

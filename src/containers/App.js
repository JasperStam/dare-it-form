import React, { Component } from 'react';
import { Background, Container } from '../components';
import Success from '../components/Success';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Form from './Form';

@observer
export default class App extends Component {
    @observable.ref results;

    handleSubmit = results => {
        this.results = results;
    };

    goBack = () => {
        this.results = null;
    };

    render() {
        return (
            <Background>
                <Container>
                    {!this.results && <Form onSubmit={this.handleSubmit} />}
                    {this.results && (
                        <Success data={this.results} goBack={this.goBack} />
                    )}
                </Container>
            </Background>
        );
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, InnerContainer, Button, Attribute } from './index';
import { LABELS } from '../containers/Form';

export default class Success extends Component {
    static propTypes = {
        goBack: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
    };

    renderAttribute = key => {
        const val = this.props.data[key];
        return (
            <li key={key}>
                <Attribute>{LABELS[key]}:</Attribute> {val}
            </li>
        );
    };
    render() {
        const { data, goBack } = this.props;
        return (
            <InnerContainer>
                <Header>Success!</Header>
                <ul>{Object.keys(data).map(this.renderAttribute)}</ul>
                <Button type="button" onClick={goBack}>
                    Go Back
                </Button>
            </InnerContainer>
        );
    }
}

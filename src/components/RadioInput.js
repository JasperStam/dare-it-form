import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RadioLabel, RadioGroup } from './index';

export default class RadioInput extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        value: PropTypes.string,
    };
    render() {
        const { options, name, onChange, onBlur, value } = this.props;

        return (
            <RadioGroup>
                {options.map(option => (
                    <React.Fragment key={option}>
                        <RadioLabel>
                            <input
                                name={name}
                                type="radio"
                                value={option}
                                checked={value === option}
                                onChange={onChange}
                                onBlur={onChange}
                            />
                            {option}
                        </RadioLabel>
                    </React.Fragment>
                ))}
            </RadioGroup>
        );
    }
}

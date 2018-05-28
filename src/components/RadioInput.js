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
        checkboxStyling: PropTypes.bool,
    };
    render() {
        const {
            options,
            name,
            onChange,
            onBlur,
            value,
            checkboxStyling,
        } = this.props;

        return (
            <RadioGroup checkboxStyling={checkboxStyling}>
                {options.map(option => (
                    <React.Fragment key={option}>
                        <RadioLabel>
                            <input
                                name={name}
                                type="radio"
                                value={option}
                                checked={value === option}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                            {option}
                        </RadioLabel>
                    </React.Fragment>
                ))}
            </RadioGroup>
        );
    }
}

import React, { Component } from 'react';
import {
    Form,
    Header,
    TextInput,
    Button,
    InlineButton,
    Label,
    FlexRow,
} from '../components';
import PropTypes from 'prop-types';
import RadioInput from '../components/RadioInput';
import { Formik } from 'formik';

export const LABELS = {
    name: 'Your name',
    email: 'Your email address',
    gender: 'Gender',
    pet: 'Favorite pet',
};

export default class FormContainer extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    handleSubmit = (
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
    ) => {
        console.log('handleSubmit');
        this.props.onSubmit(values);
        setSubmitting(false);
    };

    validate = values => {
        let errors = {};

        ['name', 'email', 'gender', 'pet'].forEach(inputName => {
            if (!values[inputName]) {
                errors[inputName] = 'Required';
            }
        });
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };

    render() {
        return (
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    gender: 'male',
                    pet: 'cats',
                }}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    handleReset,
                    resetForm: resetFormik,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Header>Fill in the form</Header>
                        <Label>{LABELS.name}</Label>
                        <TextInput
                            name="name"
                            onChange={handleChange}
                            placeholder="John Doe"
                            onBlur={handleBlur}
                            value={values.name}
                            hasError={touched.name && errors.name}
                        />
                        <Label>{LABELS.email}</Label>
                        <TextInput
                            name="email"
                            onChange={handleChange}
                            placeholder="my@email.adress.com"
                            onBlur={handleBlur}
                            value={values.email}
                            hasError={touched.email && errors.email}
                        />
                        <FlexRow>
                            <div>
                                <Label>{LABELS.gender}</Label>
                                <RadioInput
                                    name="gender"
                                    options={['male', 'female', 'other']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gender}
                                />
                            </div>
                            <div>
                                <Label>{LABELS.pet}</Label>
                                <RadioInput
                                    name="pet"
                                    options={['cats', 'dogs', 'birds']}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.pet}
                                    checkboxStyling
                                />
                            </div>
                        </FlexRow>
                        <Button type="submit" disabled={isSubmitting}>
                            save & proceed
                        </Button>
                        <InlineButton
                            type="text"
                            onClick={() => {
                                resetFormik();
                            }}
                        >
                            Reset all fields
                        </InlineButton>
                    </Form>
                )}
            />
        );
    }
}

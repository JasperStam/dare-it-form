import React, { Component } from 'react';
import { Form, Header, TextInput, Label, RadioLabel } from '../components';
import RadioInput from '../components/RadioInput';
import { Formik } from 'formik';

export default class FormContainer extends Component {
    static initialValues = {
        name: '',
        email: '',
        gender: 'male',
        pet: 'cats',
    };
    handleSubmit = (
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
    ) => {
        console.log('submit', values);
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
    handleReset = (e, resetFormik) => {
        resetFormik({ name: '', email: '', gender: 'male', pet: 'cats' });
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
                        <Label>Your name</Label>
                        <TextInput
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {touched.name &&
                            errors.name && <div>{errors.name}</div>}
                        <Label>Your email</Label>
                        <TextInput
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email &&
                            errors.email && <div>{errors.email}</div>}
                        <Label>Gender</Label>
                        <RadioInput
                            name="gender"
                            options={['male', 'female', 'other']}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.gender}
                        />
                        {touched.gender &&
                            errors.gender && <div>{errors.gender}</div>}
                        <Label>Favorite pet</Label>
                        <select
                            name="pet"
                            value={values.pets}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="cats">Cats</option>
                            <option value="dogs">Dogs</option>
                            <option value="birds">Birds</option>
                        </select>
                        {touched.pet && errors.pet && <div>{errors.pet}</div>}

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                        <button
                            type="text"
                            onClick={() => {
                                resetFormik();
                            }}
                        >
                            Reset all fields
                        </button>
                    </Form>
                )}
            />
        );
    }
}

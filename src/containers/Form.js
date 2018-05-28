import React, { Component } from 'react';
import { Formik } from 'formik';

export default class Form extends Component {
    handleSubmit = (
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
    ) => {
        console.log('submit', values);
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
                }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Fill in the form</h1>
                        <label>
                            Your name
                            <input
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </label>
                        {touched.name &&
                            errors.name && <div>{errors.name}</div>}
                        <label>
                            Your email
                            <input
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </label>
                        {touched.email &&
                            errors.email && <div>{errors.email}</div>}
                        <label>
                            Gender
                            <input
                                name="gender"
                                type="radio"
                                value="male"
                                checked={values.gender === 'male'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <input
                                name="gender"
                                type="radio"
                                value="female"
                                checked={values.gender === 'female'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <input
                                name="gender"
                                type="radio"
                                value="other"
                                checked={values.gender === 'other'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </label>
                        {touched.gender &&
                            errors.gender && <div>{errors.gender}</div>}
                        <label>
                            Favorite pet
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
                        </label>
                        {touched.pet && errors.pet && <div>{errors.pet}</div>}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            />
        );
    }
}

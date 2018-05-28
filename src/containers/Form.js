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
        if (!values.name) {
            errors.name = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (
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
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            />
        );
    }
}

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// validations

class SignUpPage extends Component {

	onFormSubmit({ username, email, password }) {
		this.props.signUpUser({ username, email, password }, this.props.history);
	}

	renderField(field) {
		return (
			<fieldset className="form-group">
				<label htmlFor={field.name}>{field.label}</label>
				<input
					className="form-control"
					type={field.type}
					{...field.input}
				/>
				{field.meta.touched && field.meta.error && !field.meta.active ? (
					<div className="errorMessage">
						{field.meta.error || field.meta.warning}
					</div>
				) : null}
			</fieldset>
		);
	}

	renderAlert() {
		const message = this.props.errorMessage;

		return message ? (
			<div className="alert alert-danger">
				<strong>Oops!</strong> {message}
			</div>
		) : null;
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>
					Please Register!
				</h2>
				<form onSubmit={handleSubmit(values => this.onFormSubmit(values))}>
					<Field
						label="Username"
						name="username"
						type="text"
						component={this.renderField}
					/>
					<Field
						label="Email (optional)"
						name="email"
						type="text"
						component={this.renderField}
					/>
					<Field
						label="Password"
						type="password"
						name="password"
						component={this.renderField}
					/>
					<Field
						label="Confirm Password"
						type="password"
						name="passwordConfirm"
						component={this.renderField}
					/>
				{this.renderAlert()}
					<button type="submit" className="btn btn-primary">Register</button>
				</form>
			</div>
		);
	}
}

const validate = (values) => {
	const errors = {};

	if (!values.username) {
		errors.username = 'Username is required!';
	}
	if ((values.email) && !(/.+@.+\..+/.test(values.password))) {
		errors.email = 'Please enter a valid email address!';
	}
	if (!values.password) {
		errors.password = 'Password is required for registration.';
	}
	if (!values.passwordConfirm) {
		errors.passwordConfirm = 'Please re-enter the password.';
	}
	if (values.password !== values.passwordConfirm) {
		errors.passwordConfirm = 'Check your password - entries do not match!';
	}
	return errors;
};

const mapStateToProps = state => (
	{
		errorMessage: state.auth.error
	}
);

export default reduxForm(
	{
		form: 'SignUpForm',
		fields: ['username', 'email', 'password', 'passwordConfirm'],
		validate
	})(
		connect(mapStateToProps, actions)(SignUpPage)
	);

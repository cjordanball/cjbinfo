import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignInPage extends Component {

	submitForm({ username, password }) {
		this.props.signInUser({ username, password }, this.props.history);
	}

	renderField(field) {
		return (
			<fieldset>
				<label htmlFor={field.name}>{field.label}</label>
				<input
					type={field.type}
					{...field.input}
				/>
			</fieldset>
		);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<h2>
					Please Sign In
				</h2>
				<form onSubmit={handleSubmit(values => this.submitForm(values))}>
					<Field
						label="Username"
						name="username"
						type="text"
						component={this.renderField}
					/>
					<Field
						label="Password"
						type="password"
						name="password"
						component={this.renderField}
					/>
					<button type="submit">Sign in</button>
				</form>
			</div>
		);
	}
}

export default reduxForm(
	{
		form: 'SignInForm',
		fields: ['username', 'password']
	})(
		connect(null, actions)(SignInPage)
	);

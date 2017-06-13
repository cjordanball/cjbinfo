import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
			</fieldset>
		);
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
				<button type="submit" className="btn btn-primary">Register</button>
				</form>
			</div>
		);
	}
}


export default reduxForm(
	{
		form: 'SignUpForm',
		fields: ['username', 'email', 'password', 'passwordConfirm']
	})(
		connect(null, actions)(SignUpPage)
	);

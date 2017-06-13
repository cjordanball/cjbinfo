import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class LogOutPage extends Component {
	componentWillMount() {
		this.props.logOutUser();
	}

	render() {
		return (
			<div className="col-12">
				<div className="row justify-content-md-center">
					<h1 className="spaced">You are now signed out.</h1>
				</div>
				<div className="row justify-content-md-center">
					<h3 className="spaced">Thank you for visiting. Hope to see you again soon!</h3>
				</div>
				<div className="row spaced justify-content-md-center">
					<Link to="/">
						<button className="btn btn-primary">Back Home</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(LogOutPage);

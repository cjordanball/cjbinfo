import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BallLogo from '../../../assets/images/BallLogoHD.png';

class Header extends Component {
	render() {
		return (
			<div id="header">
				<img id="logo" alt="logo" src={BallLogo} />
				Ball Dev
				<button onClick={() => this.props.testFunc()}>Press Me</button>
				{this.props.message ? this.props.message : null}
				<ul>
					{this.props.logStatus ? (
						<li>
							<Link to="/logout">Sign Out</Link>
						</li>
					) : (
						<li key="signin">
							<Link to="/">Sign in / Register</Link>
						</li>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		message: state.test.message,
		logStatus: state.auth.logStatus
	}
);

export default connect(mapStateToProps, actions)(Header);

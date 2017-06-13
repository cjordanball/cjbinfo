import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BallLogo from '../../../assets/images/BallLogoHD.png';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<img id="logo" alt="logo" src={BallLogo} />
				<Link to="/">Ball Dev</Link>
				<ul className="nav navbar-nav">
					{this.props.logStatus ? (
						<li className="nav-item" key="signout">
							<Link className="nav-link" to="/logout">Sign Out</Link>
						</li>
					) : ([
						<li className="nav-item" key="signin">
							<Link className="nav-link" to="/signin">Sign in</Link>
						</li>,
						<li className="nav-item" key="signup">
							<Link className="nav-link" to="/signup">Register</Link>
						</li>
					])}
				</ul>
				<div className="navbar-toggler-right">
					<ul className="nav navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/resume">Resume</Link>
						</li>
					</ul>
					{this.props.userName ? this.props.userName : null}
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => (
	{
		message: state.test.message,
		logStatus: state.auth.logStatus,
		userName: state.auth.userName
	}
);

export default connect(mapStateToProps, actions)(Header);

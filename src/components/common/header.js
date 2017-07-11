import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import BallLogo from '../../../assets/images/BallLogoHD.png';
import Resume from '../../../assets/docs/201707resume.pdf';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<img id="logo" alt="logo" src={BallLogo} />
				<Link className="headerTitle" to="/">Ball Dev</Link>
				<ul className="nav navbar-nav">
					<li className="nav-item" key="home">
						<Link className={this.props.atHome ? 'nav-link' : 'homeButton nav-link'} to="/home">Home</Link>
					</li>
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
							{!this.props.resume ? <Link className="nav-link" to="/resume">View Résumé</Link> : <a href={Resume}  download>Download .pdf</a> }
						</li>
						<li className="nav-link">
							{this.props.userName ? `Welcome, ${this.props.userName}!` : null}
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => (
	{
		message: state.test.message,
		logStatus: state.auth.logStatus,
		userName: state.auth.userName,
		atHome: state.route.home,
		resume: state.route.resume
	}
);

export default connect(mapStateToProps, actions)(Header);

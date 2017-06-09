import React, { Component } from 'react';
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
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		message: state.test.message
	}
);

export default connect(mapStateToProps, actions)(Header);

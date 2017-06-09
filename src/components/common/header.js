import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Header extends Component {
	render() {
		return (
			<div id="header">
				Ball Dev
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		state
	}
);

export default connect(mapStateToProps, actions)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class LogOutPage extends Component {
	componentWillMount() {
		this.props.logOutUser();
	}

	render() {
		return (
			<div>
				Dont let the door hit your ass on the way out!
			</div>
		);
	}
}

export default connect(null, actions)(LogOutPage);

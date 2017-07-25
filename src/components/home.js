import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClickBox from './common/clickBox';
import * as actions from '../actions';

class HomePage extends Component {

	componentDidMount() {
		this.props.setHome(true);
	}
	componentWillUnmount() {
		this.props.setHome(false);
	}
	render() {
		return (
			<div>
				<div>
					<ClickBox title="Sudoku Solver" imageName="sudoku" target="/sudoku" />
				</div>
				<div>
					<ClickBox title="Outlines" imageName="outlines" target="/outlines" />
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(HomePage);

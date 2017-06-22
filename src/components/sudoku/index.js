import React, { Component } from 'react';
import { connect } from 'react-redux';
import Board from './board';
import * as actions from '../../actions';

class SudokuComponent extends Component {
	clickHandler() {
		const compList = document.getElementsByTagName('input');
		const valArr = Array.from(compList)
		.map((val) => {
			if (val.value) {
				return val.value;
			}
			return '-';
		});
		this.props.solveSudoku(valArr);
	}

	clearHandler() {
		this.props.clearSudoku();
	}

	render() {
		const fullSolutionArray = this.props.solutionArr;
		return (
			<div>
				<div className="headline">Let's Cheat at Sudoku!</div>
				<div className="explain">
					<p>Fill in the board with the given numbers and press "Show Solution".</p>
					<p>The answer will appear in the grid (note that if insufficient data is provided, the answer may not be unique).</p>
				</div>
				<div className="fullBoard">
					<Board fullSolutionArray={fullSolutionArray} />
					<button className="btn btn-primary" onClick={() => this.clickHandler()}>Show Solution</button>
					<button className="btn btn-primary" onClick={() => this.clearHandler()}>Clear Board</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		solutionArr: state.sudoku.solutionArr
	};
};

export default connect(mapStateToProps, actions)(SudokuComponent);

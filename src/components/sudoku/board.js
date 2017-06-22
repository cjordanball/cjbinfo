import React, { Component } from 'react';
import RowComponent from './row';

class BoardComponent extends Component {
	constructor(props) {
		super(props);
		this.data = {
			numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
		};
	}

	render() {
		const RowList = this.data.numbers.map((val, ind) => {
			const arrSlice = this.props.fullSolutionArray ? this.props.fullSolutionArray.slice(ind * 9, (ind + 1) * 9) : '';
			return <RowComponent vert={ind} rowSolutionArray={arrSlice} key={ind} />
		});
		return (
			<div className='board'>
				{RowList}
			</div>
		);
	}
}

export default BoardComponent;

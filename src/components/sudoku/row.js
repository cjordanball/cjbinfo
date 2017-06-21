import React, { Component } from 'react';
import BoxComponent from './box';

class RowComponent extends Component {
	constructor(props) {
		super(props);
		this.data = {
			numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
		};
	}
	render() {
		const BoxList = this.data.numbers.map((val, ind) => {
			const arrValue = this.props.rowSolutionArray ? this.props.rowSolutionArray[ind] : '';
			return <BoxComponent boxValue={arrValue} key={ind} />
		});
		return (
			<div>
				{BoxList}
			</div>
		);
	}
}

export default RowComponent;

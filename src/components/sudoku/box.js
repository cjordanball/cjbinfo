import React, { Component } from 'react';

class BoxComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			original: false
		};
	}

	componentWillReceiveProps(nextProps) {
		this.boxUpdate(nextProps.boxValue);
	}
	boxUpdate(val, orig) {
		const okayData = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if (okayData.includes(val) && orig) {
			this.setState({
				value: this.props.boxValue || val,
				original: true
			});
		} else if (okayData.includes(val)) {
			this.setState({
				value: this.props.boxValue || val,
			});
		} else {
			this.setState({
				value: '',
				original: false
			});
		}
	}

	render() {
		const classes = {
			rightline: (this.props.horiz % 3 === 2),
			leftline: (this.props.horiz % 3 === 0),
			bottomline: (this.props.vert % 3 === 2),
			topline: (this.props.vert % 3 === 0),
			chosen: (this.state.original),
			gridBox: true
		};

		let properties = Object.keys(classes);
		properties = properties.filter(val => classes[val]).join(' ');

		return (
			<input
				value={this.state.value}
				onChange={event => this.boxUpdate(event.target.value, 'orig')}
				type="text"
				className={properties}
			/>
		);
	}
}

export default BoxComponent;

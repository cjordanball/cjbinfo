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
		console.log('boxVal', this.props.boxValue);
		return (
			<input
				value={this.state.value}
				onChange={event => this.boxUpdate(event.target.value, 'orig')}
				type="text"
				className={this.state.original ? 'gridBox chosen' : 'gridBox'}
			/>
		);
	}
}

export default BoxComponent;

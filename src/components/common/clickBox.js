import React from 'react';
import { Link } from 'react-router-dom';

const ClickBoxComponent = props => (
	<Link to={props.target}>
		<div className="clickBox">
			<div className="pictureBox" />
			<div className="text">
				{props.title}
			</div>
		</div>
	</Link>
);

export default ClickBoxComponent;

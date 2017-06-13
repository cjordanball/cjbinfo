import React from 'react';
import { Link } from 'react-router-dom';

const BoxChoice = props => (
	<Link to={props.destination}>
		<div className="boxChoice">
			{props.text}
		</div>
	</Link>
);

export default BoxChoice;

import React from 'react';
import BoxChoice from './boxes';

const Selections = props => (
	<div className="selections">
		<BoxChoice text="Signin" destination="/signin" />
		<BoxChoice text="Register" destination="/signin" />
		<BoxChoice text="Monkey" destination="/signin" />
		<BoxChoice text="Beatles" destination="/signin" />
	</div>
);

export default Selections;

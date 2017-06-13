import React from 'react';
import BoxChoice from './boxes';

const Selections = props => (
	<div className="selections">
		<BoxChoice text="Signin" destination="/signin" />
		<BoxChoice text="Register" destination="/signup" />
		<BoxChoice text="Continue as Guest" destination="/home" />
	</div>
);

export default Selections;

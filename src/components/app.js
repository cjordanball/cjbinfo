import React from 'react';
import construct from '../../assets/images/underConstruction.jpg';

const App = () => (
	<div>
		<div className="heading">
			<h2>You Have Arrived at the Website of</h2>
			<h1>C. Jordan Ball III</h1>
			<h2>Please Forgive My Disarray!</h2>
		</div>
		<img alt="construction site" className="placeholdImage" src={construct} />
		<a href="http://www.freepik.com/free-photo/warning-zone_953380.htm">Designed by Freepik</a>
		<div>
			<p>
				I recently decided to update this website from front-end to back, to clear out
				accumulated clutter and to make it more enjoyable and helpful for the user.
				Currently, I expect to begin placing materials onto the page in the first
				week of June.  Thank you for your patience.
			</p>
		</div>
	</div>
);

export default App;

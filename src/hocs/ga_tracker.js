import React from 'react';
import GA from 'react-ga';

GA.initialize('UA-101099588-1');

const withTracker = (Comp) => {
	const trackPage = (page) => {
		console.log('set & pageview');
		GA.set({ page });
		GA.pageview(page);
	};

	const HOC = (props) => {
		console.log('in HOC');
		const page = props.location.pathname;
		trackPage(page);

		return (
			<Comp {...props} />
		);
	};

	return HOC;
};

export default withTracker;

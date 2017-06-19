import React from 'react';
import GA from 'react-ga';
import config from '../../config';

GA.initialize('UA-101099588-1');

const withTracker = (Comp) => {
	if (config.production === 'production') {
		const trackPage = (page) => {
			GA.set({ page });
			GA.pageview(page);
		};
		const HOC = (props) => {
			const page = props.location.pathname;
			trackPage(page);
			return (
				<Comp {...props} />
			);
		};
		return HOC;
	}
	return () => <Comp />;
};

export default withTracker;

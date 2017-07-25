import React from 'react';
import { Link } from 'react-router-dom';
import Picture from './picture';

const FrontPage = () => (
	<div>
		<div className="row">
			<div className="col-4">
				<div className="row">
					<Picture />
				</div>
				<div className="row justify-content-md-center">
					<h2>C. Jordan Ball III</h2>
					<h4>Web Developer</h4>
					<h5>React | Angular2 | Node</h5>
					<h5>MongoDB | Postgres | AWS</h5>
				</div>
			</div>
			<div className="col-8">
				<div className="row justify-content-md-center">
					<h1>Welcome</h1>
				</div>
				<div className="row justify-content-md-center">
					<p>
						Thank you for visiting this website. At this time I am working to update my previous website and I will be adding materials to this site on a regular basis in the near future.
					</p>
					<p>
						I encourage visitors to register for the site; currently, access to all materials on this site is free and open, and full access will remain so for all registered users. In the future, it is possible that access to all or portions of these materials will be restricted. However, if that occurs, previously registered users will continue to have unhindered access.
					</p>
				</div>
				<div className="row justify-content-md-center">
					<h1>Updates</h1>
				</div>
				<div className="row justify-content-md-left">
					<p>
						<strong>24 July 2017:</strong> Outlines available on a number of JavaScript subjects! Angular4, React, Webpack, and more!
					</p>
					<p>
						<strong>11 July 2017:</strong> Resume can now be downloaded as a .pdf file!
					</p>
				</div>
				<div className="row justify-content-md-center">
					<Link to="/home">
						<button className="btn btn-primary">Enter as guest!</button>
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default FrontPage;

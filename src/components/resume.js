import React from 'react';

const ResumePage = () => (
	<div id="accordion" role="tablist" aria-multiselectable="true">
		<div className="card">
			<div className="card-header" role="tab" id="headingOne">
				<h5 className="mb-0">
					<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						General Profile
					</a>
				</h5>
			</div>
			<div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
				<div className="card-block">
					Former attorney turned programmer/web developer, with experience designing and building full-stack web applications with Node/Express. Highly skilled as a problem solver, ranked 1st or 2nd out of 65,000+ users on the <a href="https://coderbyte.com">coderbyte.com</a> coding challenge website. A lifelong learner who combined a love of new technologies with a passion for digging deep into programming fundamentals.
				</div>
			</div>
		</div>
		<div className="card">
			<div className="card-header" role="tab" id="headingTwo">
				<h5 className="mb-0">
					<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
						Summary of Technical Skills (strong skills in bold)
					</a>
				</h5>
			</div>
			<div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
				<div className="card-block">
					<table className="table table-hover">
						<tbody>
							<tr>
								<td className="col1">Programming/MarkupLanguages:</td>
								<td className="col2"><strong>Javascript(ES6)</strong>, <strong>C</strong>, Java, Go, <strong>HTML</strong>, <strong>CSS</strong></td>
							</tr>
							<tr>
								<td className="col1">Server-Side Frameworks:</td>
								<td className="col1"><strong>Node.js</strong>, <strong>Express.js</strong>, <strong>Swagger</strong></td>
							</tr>
							<tr>
								<td className="col1">Front-End Frameworks:</td>
								<td className="col2"><strong>React/Redux</strong>, <strong>Angular4</strong>, Angular, <strong>Bootstrap</strong>
								</td>
							</tr>
							<tr>
								<td className="col1">Database:</td>
								<td className="col2">d3, Highcharts</td>
							</tr>
							<tr>
								<td className="col1">Testing:</td>
								<td className="col2"><strong>Mocha</strong>, <strong>Jasmine</strong></td>
							</tr>
							<tr>
								<td className="col1">Other:</td>
								<td className="col2">
									<strong>AWS (EC2, S3, Route53, IAM, etc.)</strong>,
									<strong>Git/GitHub</strong>,
									<strong>Webpack</strong>,
									<strong>Docker</strong>,
									<strong>Digital Ocean</strong>
									<strong>agile development</strong>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div className="card">
			<div className="card-header" role="tab" id="headingThree">
				<h5 className="mb-0">
					<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
						Experience
					</a>
				</h5>
			</div>
			<div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
				<div className="card-block">
					<table className="table table-hover">
						<tbody>
							<tr>
								<td className="col3"><strong>Shockoe</strong></td>
								<td className="col4">Software engineer creating web applications for large corporate clients. Lead developer in setting up application using Angular2 framework for national retailer to manage inventory through mobile devices used by employees connected to company database. Lead front-end developer for application allowing employees to make reservations on corporate buses and for managers to supervise bus movement and ridership.</td>
							</tr>
							<tr>
								<td className="col3"><strong>Lumiary</strong></td>
								<td className="col4">Contract position working as a developer for team updating front end of a customer data application currently employing a BackboneJs/Marionette framework. Creating new views to designer specifications as well as updating/debugging previously created views. Preparatory tasks to assist development of React.js/Redux app to replace current product.</td>
							</tr>
							<tr>
								<td className="col3"><strong>CaseNEX</strong></td>
								<td className="col4"><strong>React/Redux</strong>, <strong>Angular4</strong>, Angular, <strong>Bootstrap</strong>
								</td>
							</tr>
							<tr>
								<td className="col3"><strong>Web Developer</strong></td>
								<td className="col4">d3, Highcharts</td>
							</tr>
							<tr>
								<td className="col3"><strong>General Assembly</strong></td>
								<td className="col4"><strong>Mocha</strong>, <strong>Jasmine</strong></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div className="card">
			<div className="card-header" role="tab" id="headingFour">
				<h5 className="mb-0">
					<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
						Education (Degree Programs)
					</a>
				</h5>
			</div>
			<div id="collapseFour" className="collapse" role="tabpanel" aria-labelledby="headingFour">
				<div className="card-block">
					<div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
						<div className="card-block">
							<table className="table table-hover">
								<tbody>
									<tr>
										<td className="col3"><strong>Shockoe</strong></td>
										<td className="col4">Software engineer creating web applications for large corporate clients. Lead developer in setting up application using Angular2 framework for national retailer to manage inventory through mobile devices used by employees connected to company database. Lead front-end developer for application allowing employees to make reservations on corporate buses and for managers to supervise bus movement and ridership.</td>
									</tr>
									<tr>
										<td className="col3"><strong>Lumiary</strong></td>
										<td className="col4">Contract position working as a developer for team updating front end of a customer data application currently employing a BackboneJs/Marionette framework. Creating new views to designer specifications as well as updating/debugging previously created views. Preparatory tasks to assist development of React.js/Redux app to replace current product.</td>
									</tr>
									<tr>
										<td className="col3"><strong>CaseNEX</strong></td>
										<td className="col4"><strong>React/Redux</strong>, <strong>Angular4</strong>, Angular, <strong>Bootstrap</strong>
										</td>
									</tr>
									<tr>
										<td className="col3"><strong>Web Developer</strong></td>
										<td className="col4">d3, Highcharts</td>
									</tr>
									<tr>
										<td className="col3"><strong>General Assembly</strong></td>
										<td className="col4"><strong>Mocha</strong>, <strong>Jasmine</strong></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ResumePage;

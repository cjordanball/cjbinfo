import React from 'react';

const ResumePage = () => (
	<div id="accordion" role="tablist" aria-multiselectable="true">
		<div className="card">
			<div className="card-header" role="tab" id="headingOne">
				<h5 className="mb-0">
					<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						General Profile - Contact Info
					</a>
				</h5>
			</div>
			<div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
				<div className="card-block">
					Former attorney turned programmer/web developer, with experience designing and building full-stack web applications with Node/Express. Highly skilled as a problem solver, ranked 1st or 2nd out of 65,000+ users on the <a href="https://coderbyte.com">coderbyte.com</a> coding challenge website. A lifelong learner who combined a love of new technologies with a passion for digging deep into programming fundamentals.
				</div>
				<ul>
					<li>Tel: 757.425.6200</li>
					<li>Email: <a href="mailto:jordan@cjordanball.info">jordan@cjordanball.info</a></li>
					<li>gitHub: <a href="https://github.com/cjordanball">https://github.com/cjordanball</a></li>
					<li>Linked In: <a href="https://www.linkedin.com/in/cjordanball">https://www.linkedin.com/in/cjordanball</a></li>
					<li>website: <a href="https://www.cjordanball.info">https://www.cjordanball.info</a></li>
				</ul>
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
								<td className="col2"><strong>MongoDb / Mongoose</strong>, PostgreSQL / Sequelize</td>
							</tr>
							<tr>
								<td className="col1">Charting:</td>
								<td className="col2">d3, Highcharts</td>

							</tr>
							<tr>
								<td className="col1">Testing:</td>
								<td className="col2"><strong>Mocha</strong>, <strong>Jasmine</strong></td>
							</tr>
							<tr>
								<td className="col1">Other:</td>
								<td className="col2">
									<strong>AWS (EC2, S3, Route53, IAM, etc.)</strong>, <strong>Git/GitHub</strong>, <strong>Webpack</strong>, <strong>Docker</strong>, <strong>Digital Ocean</strong>, <strong>agile development</strong>
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
								<td className="col4">Contract position working as a developer for team updating front end of a customer data application currently employing a BackboneJs/Marionette framework. Creating new views to designer specifications as well as updating / debugging previously created views. Preparatory tasks to assist development of React.js / Redux app to replace current product.</td>
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
					<div className="card-block">
						<table className="table table-hover">
							<tbody>
								<tr>
									<td className="col5">
										<strong>Manhattan School of Music</strong><br />
										<span className="subText">Bachelor of Music - Classical Guitar<br />
										New York, N.Y.
										</span>
									</td>
									<td className="col6">.</td>
								</tr>
								<tr>
									<td className="col5">
										<strong>Georgetown Univ. Law Center</strong><br />
										<span className="subText">Juris Doctor<br />
										Washington, D.C.</span>
									</td>
									<td className="col6" />
								</tr>
								<tr>
									<td className="col5">
										<strong>NYU School of Law</strong><br />
										<span className="subText">LL.M. - Taxation<br />
										New York, N.Y.</span>
									</td>
									<td className="col6" />
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div className="card">
			<div className="card-header" role="tab" id="headingFive">
				<h5 className="mb-0">
					<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
						Education (Programing Related)
					</a>
				</h5>
			</div>
			<div id="collapseFive" className="collapse" role="tabpanel" aria-labelledby="headingFive">
				<div className="card-block">
					<div className="card-block">
						<table className="table table-hover">
							<tbody>
								<tr>
									<td className="col5">
										<strong>General Assembly</strong><br />
										<span className="subText">Web Development Immersive<br />
										Seattle, WA (2014 - 2015)</span>
									</td>
									<td className="col6">
										<p>Engaged in full-time, immersive web development program. Topics covered by the course included:</p>
										<ul>
											<li>
												Programming background, including command-line operation and use of GitHub;
											</li>
											<li>
												In depth coverage of most common web programming technologies, including Javascript and Ruby programming languages; HTML and CSS; jQuery, Underscore.js, lodash, Bootstrap; back-end frameworks including Node.js, Express, Rails, Sails; SQL and non-SQL (i.e., Mongo) databases; front end frameworks (Angular).
											</li>
											<li>
												Comprehensive coverage of web development techniques, including authentication, front-end and server-side validation.
											</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td className="col5">
										<strong>Harvard University/edX</strong><br />
										<span className="subText">CS50 - Intro to Computer Science<br />
										Online (2014 - 2015)
										</span>
									</td>
									<td className="col6">
										<p>
											Harvard’s gateway computer science course. Although considered one of the most rigorous undergraduate courses at Harvard, it has proved so popular that in 2015 it was adopted by Yale, via lectures streamed from the Harvard campus!
										</p>
										<p>
											The first two-thirds of this twelve-week course were implemented in C, followed by sections addressing the Internet, web applications, and computer security, utilizing PHP, JavaScript, MySQL and other common web languages / technologies. Graded assignments consisted of nine problem sets plus a  final project.
										</p>
										<p>
											Topics covered included:<br />
										<ul>
											<li>C syntax and programming structures;</li>
											<li>debugging techniques, particularly use of the gdb debugging tool;</li>
											<li>analysis and implementaion of algorithms, with a focus on asymptotic run times of common searching and sorting algorithms;</li>
											<li>data structures, including arrays, trees, tries, hash tables, linked lists, queues, and stacks;</li>
											<li>memory allocation and management, including use of pointers, heap and stack memory;</li>
											<li>file input/output, both dynamically and at the command line.</li>
										</ul>
										</p>
									</td>
								</tr>
								<tr>
									<td className="col5">
										<strong>Code Fellows</strong><br />
										<span className="subText">Foundations II - Javascript<br />
										Seattle, WA (October 2014)</span>
									</td>
									<td className="col6">
										Survey of the fundamentals of JavaScript, including basics of asynchronous programming, object-oriented JavaScript concepts, AJAX/JSON, CORS, libraries such as lodash, Underscore, and jQuery; use of Git/GitHub.
									</td>
								</tr>
								<tr>
									<td className="col5">
										<strong>Online Courses</strong><br />
										<span className="subText">Udemy, egghead.io, TreeHouse</span>
									</td>
									<td className="col6">
										<ul>
											<li>AWS Certified Solutions Architect - Associate 2017 (in progress)</li>
											<li>Docker for DevOps</li>
											<li>DockerTechnologies for DevOps and Developers</li>
											<li>React Native with Redux (in progress)</li>
											<li>Advanced React with Redux</li>
											<li>Modern React with Redux</li>
											<li>Build Web Apps with ReactJS and Flux</li>
											<li>The Complete Developer's Guide to MongoDB</li>
											<li>Complete Guide to Angular2</li>
											<li>Learn and Understand AngularJS</li>
											<li>Unit Testing AngularJS</li>
											<li>Webpack 2: The Complete Developer's Guide</li>
											<li>ES6 Javascript: The Complete Developer's Guide</li>
											<li>NodeJS Basics</li>
											<li>Learn and Understand NodeJS</li>
											<li>NodeJS Codeless API Creation: Up and Running with Swagger</li>
											<li>Use D3 to Build Interactive Charts with JavaScript</li>
											<li>Backbone Tutorial</li>
											<li>Git Basics</li>
											<li>HTML / HTML Tables / HTML Forms</li>
											<li>CSS Basics</li>
											<li>CSS - Beyond the Basics</li>
											<li>Ruby Basics</li>
											<li>Java Basics</li>
											<li>AJAX Basics</li>
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ResumePage;

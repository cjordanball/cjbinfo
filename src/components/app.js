import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/header';
import FrontPage from './frontPage/frontPage';
import SignInPage from './authComponents/signin';
import SignUpPage from './authComponents/signup';
import LogOutPage from './authComponents/signout';
import ResumePage from './resume';
import SudokuPage from './sudoku';
import HomePage from './home';
import Tracker from '../hocs/ga_tracker';

const AppComponent = () => (
	<div>
		<BrowserRouter>
			<div>
				<Header />
				<div className="innerContainer container">
					<Switch>
						<Route path="/signin" component={Tracker(SignInPage)} />
						<Route path="/signup" component={Tracker(SignUpPage)} />
						<Route path="/home" component={Tracker(HomePage)} />
						<Route path="/sudoku" component={Tracker(SudokuPage)} />
						<Route path="/logout" component={Tracker(LogOutPage)} />
						<Route path="/resume" component={Tracker(ResumePage)} />
						<Route exact path="/" component={Tracker(FrontPage)} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	</div>
);

export default AppComponent;

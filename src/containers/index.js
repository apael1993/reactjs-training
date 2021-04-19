import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {PureComponent} from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Home from './home';

class App extends PureComponent {

	render() {
		return (
			<Router>
				<Switch>
					<Route path={'/signIn'} component={SignIn}/>
					<Route path={'/signup'} component={SignUp}/>
					<Route path={'/home'} component={Home}/>
				</Switch>
			</Router>
		);
	}
}

export default App;

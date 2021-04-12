import {SCREEN_IDS} from '../helpers/constants';
import React, {PureComponent} from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';
import Home from './home';

class App extends PureComponent {

	state = {
		screenId: SCREEN_IDS.HOME
	};

	navigate = (screenId) => {
		this.setState({
			screenId
		});
	};

	getScreen = () => {
		const {screenId} = this.state;

		switch (screenId) {
			case SCREEN_IDS.SIGN_IN: {
				return <SignIn navigate={this.navigate}/>
			}
			case SCREEN_IDS.SIGN_UP: {
				return <SignUp navigate={this.navigate}/>
			}
			case SCREEN_IDS.HOME: {
				return <Home/>;
			}
			default: {
				return null;
			}
		}
	};

	render() {
		return this.getScreen();
	}
}

export default App;

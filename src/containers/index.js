import React, {Component} from 'react';
import SignIn from './sign-in';
import SignUp from './sign-up';

class App extends Component {

	state = {
		isSignInScreen: false
	};

	shouldComponentUpdate(nextProps, nextState) {
		return this.state.isSignInScreen !== nextState.isSignInScreen;
	}

	toggleScreen = () => {
		this.setState({
			isSignInScreen: !this.state.isSignInScreen
		});
	};

	render() {
		const {isSignInScreen} = this.state;

		return isSignInScreen ? (
			<SignIn changeScreen={this.toggleScreen}/>
		) : (
			<SignUp changeScreen={this.toggleScreen}/>
		)
	}
}

export default App;
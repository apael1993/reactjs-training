import InputRaw from '../../components/shared/input-raw';
import React, {PureComponent} from 'react';

class SignIn extends PureComponent {

	state = {
		email: '',
		password: ''
	}

	onSignIn = () => {
		// TODO: Sign in action
	};

	onEmailChange = (e) => {
		this.setState({email: e.target.value});
	};

	onPasswordChange = (e) => {
		this.setState({password: e.target.value});
	};

	render() {
		const {email, password} = this.state;

		return (
			<div>
				<InputRaw
					onChange={this.onEmailChange}
					label={'Email'}
					value={email}
				/>
				<InputRaw
					onChange={this.onPasswordChange}
					label={'Password'}
					type={'password'}
					value={password}
				/>

				<button onClick={this.onSignIn}>Sign In</button>
				<br/>
				<button>Go To Sign Up</button>
			</div>
		);
	}
}

export default SignIn;

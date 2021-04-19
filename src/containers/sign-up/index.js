import InputRaw from '../../components/shared/input-raw';
import React, {PureComponent} from 'react';

class SignUp extends PureComponent {

	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	onSignUp = () => {
		const {password, confirmPassword} = this.state;

		if (password === confirmPassword) {
			// TODO: Sign up action
		}
	};

	render() {
		const {firstName, lastName, email, password, confirmPassword} = this.state;

		return (
			<div>
				<InputRaw
					onChange={(e) => this.setState({firstName: e.target.value})}
					label={'First Name'}
					value={firstName}
				/>
				<InputRaw
					onChange={(e) => this.setState({lastName: e.target.value})}
					label={'Last Name'}
					value={lastName}
				/>
				<InputRaw
					onChange={(e) => this.setState({email: e.target.value})}
					label={'Email'}
					value={email}
				/>
				<InputRaw
					onChange={(e) => this.setState({password: e.target.value})}
					label={'Password'}
					type={'password'}
					value={password}
				/>
				<InputRaw
					onChange={(e) => this.setState({confirmPassword: e.target.value})}
					label={'Confirm password'}
					value={confirmPassword}
					type={'password'}
				/>

				<button onClick={this.onSignUp}>Sign Up</button><br/>

				<button>Go To Sign In</button>
			</div>
		);
	}
}

export default SignUp;

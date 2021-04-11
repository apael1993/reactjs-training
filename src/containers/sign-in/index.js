import InputRaw from '../../components/shared/input-raw';
import {SCREEN_IDS} from '../../helpers/constants';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SignIn extends PureComponent {

	static propTypes = {
		navigate: PropTypes.func.isRequired
	};

	state = {
		email: '',
		password: ''
	}

	onSignIn = () => {
		const {navigate} = this.props;

		navigate(SCREEN_IDS.HOME);
	};

	onEmailChange = (e) => {
		this.setState({email: e.target.value});
	};

	onPasswordChange = (e) => {
		this.setState({password: e.target.value});
	};

	render() {
		const {navigate} = this.props;
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
				<button onClick={() => navigate(SCREEN_IDS.SIGN_UP)}>Go To Sign Up</button>
			</div>
		);
	}
}

export default SignIn;

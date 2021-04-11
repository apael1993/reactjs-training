import InputRaw from '../../components/shared/input-raw';
import {SCREEN_IDS} from '../../helpers/constants';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class SignUp extends PureComponent {

	static propTypes = {
		navigate: PropTypes.func.isRequired
	};

	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	onSignUp = () => {
		const {navigate} = this.props;
		const {password, confirmPassword} = this.state;

		if (password === confirmPassword) {
			navigate(SCREEN_IDS.SIGN_IN);
		}
	};

	render() {
		const {navigate} = this.props;
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

				<button onClick={() => navigate(SCREEN_IDS.SIGN_IN)}>Go To Sign In</button>
			</div>
		);
	}
}

export default SignUp;

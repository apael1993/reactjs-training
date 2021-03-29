import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignUp extends Component {

	static propTypes = {
		changeScreen: PropTypes.func.isRequired
	};

	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	onSignUp = () => {
		const {firstName, lastName, email, password, confirmPassword} = this.state;

		if (password === confirmPassword) {
			console.log({firstName, lastName, email, password});
		}
	};

	render() {
		const {changeScreen} = this.props;
		const {firstName, lastName, email, password, confirmPassword} = this.state;

		return (
			<div>
				First Name:
				<input
					onChange={(e) => this.setState({firstName: e.target.value})}
					value={firstName}
					type='text'
				/><br/>
				Last Name:
				<input
					onChange={(e) => this.setState({lastName: e.target.value})}
					value={lastName}
					type='text'
				/><br/>
				Email:
				<input
					onChange={(e) => this.setState({email: e.target.value})}
					value={email}
					type='text'
				/><br/>
				Password:
				<input
					onChange={(e) => this.setState({password: e.target.value})}
					value={password}
					type='password'
				/><br/>
				Confirm password:
				<input
					onChange={(e) => this.setState({confirmPassword: e.target.value})}
					value={confirmPassword}
					type='password'
				/><br/>

				<button onClick={this.onSignUp}>Sign Up</button><br/>

				<button onClick={changeScreen}>Go To Sign In</button>
			</div>
		);
	}
}

export default SignUp;
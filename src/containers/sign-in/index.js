import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SignIn extends Component {

	static propTypes = {
		changeScreen: PropTypes.func.isRequired
	};

	state = {
		email: '',
		password: ''
	}

	onSignIn = () => {
		const {email, password} = this.state;

		console.log({email, password});
	};

	onEmailChange = (e) => {
		this.setState({email: e.target.value});
	};

	render() {
		const {changeScreen} = this.props;
		const {email, password} = this.state;

		return (
			<div>
				Email:
				<input
					onChange={this.onEmailChange}
					value={email}
					type='text'
				/><br/>
				Password:
				<input
					onChange={(e) => {
						this.setState({password: e.target.value});
					}}
					value={password}
					type='password'
				/><br/>

				<button onClick={this.onSignIn}>Sign In</button>
				<br/>
				<button onClick={changeScreen}>Go To Sign Up</button>
			</div>
		);
	}
}

export default SignIn;
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

	};

	render() {
		const {changeScreen} = this.props;
		const {email, password} = this.state;

		return (
			<div>
				Email: <input type="text" value={email}/><br/>
				Password: <input type="password" value={password}/><br/>

				<button onClick={this.onSignIn}>Sign In</button><br/>
				<button onClick={changeScreen}>Go To Sign Up</button>
			</div>
		);
	}
}

export default SignIn;
import React, {Component} from 'react';

class SignUp extends Component {

	onSignUp = () => {

	};

	render() {
		const {changeScreen} = this.props;

		return (
			<div>
				First Name: <input type="text"/><br/>
				Last Name: <input type="text"/><br/>
				Email: <input type="text"/><br/>
				Password: <input type="password"/><br/>
				Confirm password: <input type="password"/><br/>

				<button onClick={this.onSignUp}>Sign Up</button><br/>

				<button onClick={changeScreen}>Go To Sign In</button>
			</div>
		);
	}
}

export default SignUp;
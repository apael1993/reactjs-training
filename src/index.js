import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

const signInElement = (
	<button>Sign In</button>
);

const signUpElement = (
	<button>Sign Up</button>
);

ReactDOM.render(
	signUpElement,
	document.getElementById('root')
);
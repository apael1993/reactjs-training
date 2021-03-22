import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showTime: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				showTime: false
			});
		}, 5000);
	}

	render() {
		const {date} = this.props;
		const {showTime} = this.state;

		return (
			<>
				<h1>Time</h1>
				{showTime ? <Time date={date}/> : null}
			</>
		);
	}
}

class Time extends Component {

	constructor(props) {
		super(props);

		this.state = {
			currentDate: props.date,
			count: 0
		};
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			const {currentDate} = this.state;
			currentDate.setSeconds(currentDate.getSeconds() + 1);

			this.setState({
				currentDate: this.props.date
			});
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		const {currentDate} = this.state;

		return (
			<h1>{currentDate.toLocaleString()}</h1>
		);
	}
}

ReactDOM.render(
	<Clock date={new Date()}/>,
	document.getElementById('root')
);
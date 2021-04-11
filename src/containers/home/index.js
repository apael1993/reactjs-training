import todosCtrl from '../../controllers/todos';
import React, {Component} from 'react';

class Home extends Component {

	componentDidMount() {
		todosCtrl.getTodos();
	}

	render() {
		return (
			<div>
				Welcome Home!!!
			</div>
		);
	}
}

export default Home;

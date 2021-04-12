import TodosCtrl from '../../controllers/todos';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Home extends Component {

	static propTypes = {
		todos: PropTypes.array.isRequired
	};

	componentDidMount() {
		TodosCtrl.getTodos();
	}

	render() {
		const {todos} = this.props;

		return (
			<div>
				Welcome Home!!!
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const todos = state.todos;

	return {
		todos
	};
};

export default connect(mapStateToProps)(Home);

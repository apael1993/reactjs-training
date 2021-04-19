import TodosCtrl from '../../../controllers/todos';
import InputRaw from '../../shared/input-raw';
import React, {Component} from 'react';
import Table from '../../shared/table';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const COLUMNS = [
	{
		id: 1,
		label: 'Id',
		key: 'id'
	},
	{
		id: 2,
		label: 'Title',
		key: 'title'
	},
	{
		id: 3,
		label: 'Completed',
		key: 'completed'
	}
];

class Todos extends Component {

	static propTypes = {
		todos: PropTypes.array.isRequired
	};

	state = {
		searchedText: ''
	};

	componentDidMount() {
		debugger;
		TodosCtrl.getTodos();
	}

	onSearchedTextChange = (e) => {
		this.setState({searchedText: e.target.value});
	}

	render() {
		const {todos} = this.props;
		const {searchedText} = this.state;

		return (
			<div>
				<InputRaw
					onChange={this.onSearchedTextChange}
					value={searchedText}
				/>

				<Table
					items={todos.filter(todo => todo.title.includes(searchedText))}
					columns={COLUMNS}
				/>
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

export default connect(mapStateToProps)(Todos);

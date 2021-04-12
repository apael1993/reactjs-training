import store from '../store';
import * as actionTypes from '../store/action-types';

const TodosCtrl = {};

TodosCtrl.getTodos = () => {
	// TODO: Change to API

	fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(todos => {
			store.dispatch({
				type: actionTypes.SET_TODOS,
				payload: todos
			});
		});
};

export default TodosCtrl;

import * as actionTypes from '../store/action-types';
import {END_POINTS} from '../core/constants';
import API from '../core/api';
import store from '../store';

const TodosCtrl = {};

TodosCtrl.getTodos = () => {
	API.getAction(
		END_POINTS.TODOS,
		(todos) => {
			store.dispatch({
				type: actionTypes.SET_TODOS,
				payload: todos
			});
		},
		(err) => {
		}
	);
};

export default TodosCtrl;

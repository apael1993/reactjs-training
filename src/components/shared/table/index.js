import Utils from '../../../helpers/utils';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {

	static propTypes = {
		columns: PropTypes.array.isRequired,
		items: PropTypes.array.isRequired
	};

	shouldComponentUpdate(nextProps) {
		const {items, columns} = this.props;

		if (!Utils.isDeepEqual(items, nextProps.items)) {
			return true;
		}

		return !Utils.isDeepEqual(columns, nextProps.columns);
	}

	render() {
		const {items, columns} = this.props;

		return (
			<table>
				<thead>
					<tr>
						{columns.map(column => (
							<th key={column.id}>{column.label}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{items.map(todo => (
						<tr key={todo.id}>
							{columns.map(column => (
								<td key={column.id}>
									{todo[column.key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		);
	}
}

export default Table;

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputRaw extends PureComponent {

	static propTypes = {
		onChange: PropTypes.func.isRequired,
		label: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		type: PropTypes.string
	};

	render() {
		const {label, value, type, onChange} = this.props;

		return (
			<>
				{label}:
				<input
					type={type || 'text'}
					onChange={onChange}
					value={value}
				/>
				<br/>
			</>
		);
	}
}

export default InputRaw;

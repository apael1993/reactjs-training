import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class InputRaw extends PureComponent {

	static propTypes = {
		onChange: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		label: PropTypes.string,
		type: PropTypes.string
	};

	render() {
		const {label, value, type, onChange} = this.props;

		return (
			<>
				{label ? `${label}:` : null}
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

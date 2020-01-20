import React from "react";
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
	render() {
		const { label, isSelected, onCheckboxChange } = this.props;
		return (
			<label className="mx-3">
				<input
					arialabel={label}
					checked={isSelected}
					className="checkbox-input mr-1"
					name={label}
					onChange={onCheckboxChange}
					type="checkbox"
				/>
				{label}
			</label>
		);
	}
}

Checkbox.propTypes = {
	isSelected: PropTypes.bool.isRequired,
	label: PropTypes.string,
	onCheckboxChange: PropTypes.func.isRequired
}

export default Checkbox;

import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Checkbox extends React.Component {



    render() {
        const { label, isSelected, onCheckboxChange } = this.props;
        return (
            <div className="form-check">
            <label>
                <input
                    type="checkbox"
                    name={label}
                    checked={isSelected}
                    onChange={onCheckboxChange}
                    className="form-check-input"
                    arailabel={label}
                />
                {label}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
    isSelected: PropTypes.bool,
    onCheckboxChange: PropTypes.func.isRequired
}

export default Checkbox;

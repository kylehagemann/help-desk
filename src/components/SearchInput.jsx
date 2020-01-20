import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onSearchChange(e);
  }

    render() {
        const { label, searchValue, isRequired } = this.props;
        return (
            <label>
                <input
                    name={label}
                    onChange={this.handleChange}
                    className="search-input"
                    arailabel={label}
                    value={searchValue}
                    required={isRequired}
                />
                {isRequired && label.includes('filter key') ? label + '*' : label}
            </label>
        );
    }
}

SearchInput.propTypes = {
    label: PropTypes.string,
    searchValue: PropTypes.string,
    isRequired: PropTypes.bool.isRequired,
    onSearchChange: PropTypes.func.isRequired
}

export default SearchInput;

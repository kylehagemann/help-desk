import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.searchData(e.target.value);
    }

    render() {
        const filterVar = this.props.filterVar;
        // const valueFilter = this.props.valueFilter;

        return (
          <>
            <input value={filterVar} onChange={this.handleChange} />
          </>
        );
    }
}

SearchInput.propTypes = {
  filterVar: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default SearchInput;

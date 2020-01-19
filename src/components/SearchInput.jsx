import React from "react";
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
            {/* <input value={valueFilter} onChange={this.handleChange} /> */}
          </>
        );
    }
}

export default SearchInput;

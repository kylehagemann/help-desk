import React from "react";
import PropTypes from "prop-types";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onSearchChange(e);
  }

  render() {
    const { label, searchValue, required } = this.props;
    return (
      <label className="mx-3">
        {required && label && label.includes("search key") ? label + "(*Required)" : label}
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
          </InputGroupAddon>
          <Input
            name={label}
            onChange={this.handleChange}
            className="search-input"
            arailabel={label}
            value={searchValue}
            required={required}
          />
        </InputGroup>
      </label>
    );
  }
}

SearchInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
  searchValue: PropTypes.string
}

export default SearchInput;

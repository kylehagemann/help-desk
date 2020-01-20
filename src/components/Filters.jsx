import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../actions/index";
import SearchInput from "./SearchInput";
import Checkbox from "./Checkbox";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.props.checkboxes[option]}
          onCheckboxChange={this.props.handleCheckboxChange}
          key={option}
        />
      );
    
    createCheckboxes = () => this.props.myOptions.map(this.createCheckbox);

    createSearchInput = searchInput => {
        return (
            <SearchInput
              label={searchInput}
              searchValue={this.props.searchInputs[searchInput]} 
              onSearchChange={this.props.handleSearchChange}
              key={searchInput}
              isRequired={this.props.isRequired}
            />
        );
    }

    
    createSearchInputs = () => this.props.mySearchInputs.map(this.createSearchInput);

    render() {    
        return (
            <Container>
                <Row>
                    {this.createCheckboxes()}
                </Row>
                <Row>
                    {this.createSearchInputs()}
                </Row>
            </Container>
        );
    }
}

export default Filters;

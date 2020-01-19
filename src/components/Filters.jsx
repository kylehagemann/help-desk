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

    render() {    
        return (
            <Container>
                <Row>
                    {this.createCheckboxes()}
                </Row>
                <Row>
                    <SearchInput filterVar={this.props.filterKey} searchData={this.props.handleFilterKey} />
                    <SearchInput filterVar={this.props.filterValue} searchData={this.props.handleFilterValue} />
                </Row>
            </Container>
        );
    }
}

export default Filters;

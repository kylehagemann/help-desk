import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../actions/index";
import SearchInput from "./SearchInput";
import CheckBox from "./Checkbox";

class Filters extends React.Component {


    render() {        

        return (
            <Container>
                <Row>
                <label>
                    Users
                    <CheckBox checked={this.props.isChecked} handleChecked={this.props.handleChecked}/>
                </label>
                </Row>
                <Row>
                    <SearchInput filterVar={this.props.filter} searchData={this.props.filterData} />
                    <SearchInput filterVar={this.props.filter2} searchData={this.props.filterData2} />
                    {/* <input value={valueFilter} onChange={this.handleChange} /> */}
                </Row>
            </Container>
        );
    }
}

export default Filters;

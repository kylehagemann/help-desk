import React from "react";
import { connect } from "react-redux";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChecked(e.target.value);
    }

    render() {
        const isChecked = this.props.isChecked;

        return (
          <>
            <input type="checkbox" checked={isChecked} onChange={this.handleChange} value="users"></input>
          </>
        );
    }
}

export default Checkbox;

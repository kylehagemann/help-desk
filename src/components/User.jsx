import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

  render() {
    return (
        <div>{this.props.user.name}</div>
    );
  }
}

const mapStateToProps = state => {
    return {
      ...state.app
    }
}

export default connect(mapStateToProps, {...actions})(User);
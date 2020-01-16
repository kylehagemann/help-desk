import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import User from './User';

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ul>
                {(this.props.users || []).map(user => (
                    <li key={user.id}>
                        <div>{user.name}</div>
                    </li>
                ))}
            </ul>   
        );
    }
}

const mapStateToProps = state => {
    return {
      ...state.app
    }
}

export default connect(mapStateToProps, {...actions})(Users);
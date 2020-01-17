import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import * as actions from '../actions/index';
import Organization from './Organization';
import Ticket from './Ticket';
import User from './User';

class ResultsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Col md="4">
                <h1 className="text-center">{this.props.id}</h1>
                <ul className="px-2 data-list">
                    {this.props.id === 'organizations' ? this.props.results.map(organization => (
                        <Organization key={organization._id} organization={organization} />
                    )) : null}
                    {this.props.id === 'tickets' ? this.props.results.map(ticket => (
                        <Ticket key={ticket._id} ticket={ticket} />
                    )) : null}
                    {this.props.id === 'users' ? this.props.results.map(user => (
                        <User key={user._id} user={user} />
                    )) : null}
                </ul>
            </Col>  
        );
    }
}

const mapStateToProps = state => {
    return {
      ...state.app
    }
}

export default connect(mapStateToProps, {...actions})(ResultsList);
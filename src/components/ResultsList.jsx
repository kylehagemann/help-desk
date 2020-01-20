import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from "reactstrap";
import * as actions from '../actions/index';
import ResultCard from './ResultCard';

class ResultsList extends React.Component {
    render() {
        return (
            <Col md="4">
                <h1 className="text-center">{this.props.id}</h1>
                <ul className="px-2 data-list">
                    {this.props.id && this.props.results && this.props.results.length > 0 ? this.props.results.map(result => (
                        <ResultCard key={result._id} result={result} />
                    )) : Object.values(this.props.id).includes('*') ? 'Section Disabled' : 'No Results'}
                </ul>
            </Col>  
        );
    }
}

ResultsList.propTypes = {
    id: PropTypes.string,
    results: PropTypes.array
}

export default ResultsList;
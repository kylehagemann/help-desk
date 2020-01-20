import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import * as actions from '../actions/index';

class ResultCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          
      }
  }

  render() {
    return (
      <li className="pl-0">
        <Card>
          <CardBody>
            <CardSubtitle>Card subtitle</CardSubtitle>
              <ul>
                {this.props.result ? Object.entries(this.props.result).map(([key,value])=>
                  <li key={key}>{key} : {value.toString()}</li>
                ): 'No Results'}
              </ul>
          </CardBody>
        </Card>
      </li>
    );
  }
}

const mapStateToProps = state => {
    return {
      ...state.app
    }
}

export default connect(mapStateToProps, {...actions})(ResultCard);
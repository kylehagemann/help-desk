import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody } from "reactstrap";

class ResultCard extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <li className="pl-0 pb-3">
        <Card className="result-card">
          <CardBody>
            <ul className="card-list pl-0">
              {result ? Object.entries(result).map(([key, value]) =>
                <li key={key} arialabel="Data Group">
                  <div className="d-inline" arialabel={key} tabIndex="0">{key}</div>:
                  <div className="d-inline" arialabel={value} tabIndex="0"> {value.toString()}</div>
                </li>
              ) : <div arialabel="No Results" tabIndex="0">No Results</div>}
            </ul>
          </CardBody>
        </Card>
      </li>
    );
  }
}

ResultCard.propTypes = {
  result: PropTypes.object
}

export default ResultCard;
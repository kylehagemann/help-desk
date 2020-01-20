import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";
import ResultCard from "./ResultCard";
import { isEmpty } from "../helpers/index";

class ResultsList extends React.Component {
	render() {
		const { id, results } = this.props;
		return (
			<Col md="4">
				<h1 className="pb-1 text-center" arialabel={id} tabIndex="0">{id}</h1>
				<ul className="px-2 data-list">
					{
						!isEmpty(id) && !isEmpty(results) ? results.map(result => (
							!isEmpty(result) ?
								<ResultCard key={result._id} result={result} />
								: Object.values(id).includes("*") ?
									<div arialabel="Section Disabled" tabIndex="0">*Section Disabled</div> :
									<div arialabel="No Results" tabIndex="0">No Results</div>
						)) : Object.values(id).includes("*") ?
								<div arialabel="Section Disabled" tabIndex="0">*Section Disabled</div> :
								<div arialabel="No Results" tabIndex="0">No Results</div>
					}
				</ul>
			</Col>
		);
	}
}

ResultsList.propTypes = {
	id: PropTypes.string.isRequired,
	results: PropTypes.array.isRequired
}

export default ResultsList;
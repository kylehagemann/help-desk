import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "reactstrap";
import SearchInput from "./SearchInput";
import Checkbox from "./Checkbox";

class Filters extends React.Component {
	
	createCheckbox = checkboxOption => {
		const { checkboxes, handleCheckboxChange } = this.props;
		return (
			<Checkbox
				label={checkboxOption}
				isSelected={checkboxes[checkboxOption]}
				onCheckboxChange={handleCheckboxChange}
				key={checkboxOption}
			/>
		);
	}

	createSearchInput = searchOption => {
		const { searchInputs, handleSearchChange, required } = this.props;
		return (
			<SearchInput
				label={searchOption}
				searchValue={searchInputs[searchOption]}
				onSearchChange={handleSearchChange}
				key={searchOption}
				required={required}
			/>
		);
	}

	createCheckboxes = () => {
		const { checkboxData } = this.props;
		return checkboxData && checkboxData.map(this.createCheckbox);
	}
	createSearchInputs = () => {
		const { searchInputData } = this.props;
		return searchInputData && searchInputData.map(this.createSearchInput);
	}

	render() {
		return (
			<Col md="12">
				<Row className="my-3 justify-content-center">
					{this.createCheckboxes()}
				</Row>
				<Row className="my-3 justify-content-center">
					{this.createSearchInputs()}
				</Row>
			</Col>
		);
	}
}

Filters.propTypes = {
	checkboxData: PropTypes.array.isRequired,
	checkboxes: PropTypes.object.isRequired,
	handleCheckboxChange: PropTypes.func.isRequired,
	handleSearchChange: PropTypes.func.isRequired,
	searchInputs: PropTypes.object.isRequired,
	searchInputData: PropTypes.array.isRequired,
	required: PropTypes.bool
}

export default Filters;

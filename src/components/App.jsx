import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Spinner } from "reactstrap";
import { fetchData } from "../actions/index";
import ResultsList from "./ResultsList";
import Filters from "./Filters";
import ToastError from "./ToastError";
import { CHECKBOX_INPUTS, SEARCH_INPUTS } from "../data/index";
import * as MESSAGES from "../messages/index"
import { isEmpty } from "../helpers/index";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.state = {
			checkboxes: CHECKBOX_INPUTS.reduce(
				(checkboxOptions, checkboxOption) => ({
					...checkboxOptions,
					[checkboxOption]: true
				}),
				{}
			),
			searchInputs: SEARCH_INPUTS.reduce(
				(searchOptions, searchOption) => ({
					...searchOptions,
					[searchOption]: ""
				}),
				{}
			),
			required: true,
			filteredData: []
		}
	}

	handleCheckboxChange = changeEvent => {
		const { name } = changeEvent.target;
		if ([name].includes("exact match")) {
			this.setState(prevState => ({
				required: !prevState.required
			}));
		};
		this.setState(prevState => ({
			checkboxes: {
				...prevState.checkboxes,
				[name]: !prevState.checkboxes[name]
			}
		}));
	};

	handleSearchChange = changeEvent => {
		const name = changeEvent.target.name;
		const value = changeEvent.target.value;

		this.setState(prevState => ({
			searchInputs: {
				...prevState.searchInputs,
				[name]: value
			}
		}));
	};

	componentDidMount() {
		this.props.dispatch(fetchData());
	}

	render() {
		const { error, loading, formattedData } = this.props;

		const { 
			searchInputs,
			checkboxes,
			required
		} = this.state;

		let { filteredData } = this.state;
		const filterKey = searchInputs["search key"];
		const filterValue = searchInputs["search value"];
		const keyRegEx = new RegExp("^" + filterKey + "$");
		const valueRegEx = new RegExp("^" + filterValue + "$");

		if (!isEmpty(formattedData)) {
			if (checkboxes["exact match"]) {
				filteredData = formattedData.map(element => {
					if (!isEmpty(element, element.name)) {
						if (checkboxes[element.name]) {
							if (!isEmpty(filterKey)) {
								return {
									name: element.name, 
									data: element.data.filter(item => {
										return Object.keys(item).some(key => {
											if (key.match(keyRegEx)) {
												if (Array.isArray(item[key])) {
													return item[key].some(value => { 
														return value.match(valueRegEx) 
													});
												} else {
													return item[key].match(valueRegEx);
												};
											};
											return "";
										});
									})
								};
							} else if (isEmpty(filterKey) && !isEmpty(filterValue)) {
								return {
									name: element.name,
									data: []
								}
							} else if (isEmpty(filterKey) && isEmpty(filterValue)) {
								return {
									name: element.name,
									data: element.data
								}
							} else {
								return {
									name: element.name,
									data: []
								}
							};
						};
						return {
							name: `*${element.name}`,
							data: []
						};
					};
					return "";
				});
			} else {
				filteredData = formattedData.map(element => {
					if (!isEmpty(element, element.name)) {
						if (checkboxes[element.name]) {
							return {
								name: element.name, 
								data: element.data.filter(item => {
									return Object.keys(item).some(key => {
										if (key.startsWith(filterKey)) {
											if (Array.isArray(item[key])) {
												return item[key].some(value => { return value.startsWith(filterValue) });
											} else {
												return item[key].startsWith(filterValue);
											};
										};
										return "";
									});
								})
							};							
						};
						return {
							name: '*' + element.name,
							data: []
						};
					};
					return ""
				});
			}
		}

		if (loading) {
			return (
				<div className="text-center p-3 my-2">
					<h3>Loading</h3>
					<Spinner color="primary" />
				</div>
			)
		}

		if (error) {
			return (
				<ToastError message={error.message} />
			)
		}

		return (
			<Container>
				<Row>
					<Col md="12" className="my-5"> 
						<h1 className="text-center" arialabel="Page Title" tabIndex="0">
							Zendesk Quick Search Application
						</h1>
					</Col>
				</Row>
				<Row>
					<p arialabel="Welcome Message" tabIndex="0">
						{MESSAGES.WELCOME_MESSAGE}
					</p>
				</Row>
				<Row>
						<h3 arialabel="Searchable Fields" tabIndex="0" className="mt-3 w-100 text-center">
							Searchable Fields
						</h3>
						<Col md="4">
							<h5 arialabel="Organization Fields" tabIndex="0" className="mt-3 w-100 text-center">
								Organization Fields:
							</h5>
							<p arialabel="Organization Fields" tabIndex="0" className="text-center">
								{MESSAGES.ORGANIZATION_FIELDS}
							</p>
						</Col>
						<Col md="4">
							<h5 arialabel="Organization Fields" tabIndex="0" className="mt-3 w-100 text-center">
								Ticket Fields:
							</h5>
							<p arialabel="Organization Fields" tabIndex="0" className="text-center">
								{MESSAGES.TICKET_FIELDS}
							</p>
						</Col>
						<Col md="4">
							<h5 arialabel="Organization Fields" tabIndex="0" className="mt-3 w-100 text-center">
								User Fields:
							</h5>
							<p arialabel="Organization Fields" tabIndex="0" className="text-center">
								{MESSAGES.USER_FIELDS}
							</p>
						</Col>
				</Row>
				<Row>
					{
					isEmpty(checkboxes) ? <ToastError message={MESSAGES.MISSING_CHECKBOX} /> : 
					isEmpty(searchInputs) ? <ToastError message={MESSAGES.MISSING_SEARCH_INPUT} /> :
						<Filters
							handleSearchChange={this.handleSearchChange}
							searchInputs={searchInputs}
							checkboxes={checkboxes}
							checkboxData={CHECKBOX_INPUTS}
							searchInputData={SEARCH_INPUTS}
							handleCheckboxChange={this.handleCheckboxChange}
							required={required}
						/>
					}
				</Row>
				<Row>
					{
					!isEmpty(filteredData) ? filteredData.map((dataType, index) => (
						!isEmpty(dataType) ? 
							<ResultsList key={dataType.name} id={dataType.name} results={dataType.data} />
						: <div key={index} className="col-md-4">
								<ToastError key={index} message={MESSAGES.ERROR_OBJECT_DATA} />
							</div>
					)) : <ToastError message={MESSAGES.MISSING_FILTERED_DATA} />
					}
				</Row>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	error: state.error,
	formattedData: state.formattedData,
	loading: state.loading
});

export default connect(mapStateToProps)(App);

import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../actions/index";
import ResultsList from './ResultsList';
import Filters from './Filters';
import { formatData } from "../api/index";
import { createNodeArray } from "typescript";
import Checkbox from './Checkbox'

const OPTIONS = ["organizations", "tickets", "users", "exact match"];
const SEARCHINPUTS = ["filter key", "filter value"];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.state = {
                        checkboxes: OPTIONS.reduce(
                            (options, option) => ({
                            ...options,
                            [option]: true
                            }),
                            {}
                        ),
                        searchInputs: SEARCHINPUTS.reduce(
                            (options, option) => ({
                                ...options,
                                [option]: ""
                                }),
                                {}
                            ),
                        isRequired: true,
                        filteredData: [], 
                    }
    }
  
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
        if ([name].includes('exact match')) {
            this.setState(prevState => ({
                isRequired: !prevState.isRequired
            })
        )};
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
        const { error, loading, parsedData } = this.props;

        const { searchInputs,
                checkboxes,
                isRequired
        } = this.state;

        let { filteredData } = this.state;
        const filterKey = searchInputs['filter key'];
        const filterValue = searchInputs['filter value'];
        const myRegEx = new RegExp("^"+ filterKey + "$");
        const myRegEx2 = new RegExp("^"+ filterValue + "$");
        
        if (!checkboxes['exact match']) {
            filteredData = parsedData.map(element =>
                {
                    if (checkboxes[element.name]) {
                        return {
                            name: element.name, data: element.data.filter(item => 
                                {
                                    return Object.keys(item).some(key => {
                                        if (key.startsWith(filterKey)) { 
                                            if (Array.isArray(item[key])) { 
                                                return item[key].some(value => { return value.startsWith(filterValue)})
                                            } else {
                                                return item[key].startsWith(filterValue);
                                            }
                                        }
                                        return '';
                                    });
                                }
                            )
                        }
                    }
                    return {
                        name: element.name + ' - disabled', 
                        data: ''
                    };
                }
            );
        }
        else {
            filteredData = parsedData.map(element =>
                {
                    if (checkboxes[element.name]) {
                        if (filterKey) {                    
                            return {
                                name: element.name, data: element.data.filter(item => 
                                    {
                                        return Object.keys(item).some(key => {
                                            if (key.match(myRegEx)) { 
                                                if (Array.isArray(item[key])) { 
                                                    return item[key].some(value => { return value.match(myRegEx2)})
                                                } else {
                                                    return item[key].match(myRegEx2);
                                                }
                                            }
                                            return '';
                                        });
                                    }
                                )
                            }
                        } else if (!filterKey && filterValue) {
                            return {
                                name: element.name, 
                                data: ''
                            }
                        } else if (!filterKey && !filterValue) {
                            return {
                                name: element.name, 
                                data: element.data
                            }
                        } else {
                            return {
                                name: element.name, 
                                data: ''
                            }
                        }
                    }
                    return {
                        name: '*' + element.name, 
                        data: ''
                    };
                }
            );
        }
        

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <Container>
                <Row>

                    <Filters 
                        handleSearchChange={this.handleSearchChange} 
                        searchInputs={searchInputs}
                        checkboxes={checkboxes}
                        myOptions={OPTIONS}
                        mySearchInputs={SEARCHINPUTS}
                        handleCheckboxChange={this.handleCheckboxChange}
                        isRequired={isRequired} />
                </Row>
                <Row>
                    {filteredData && filteredData.length > 0 ? filteredData.map(dataType => (
                        <ResultsList key={dataType.name} id={dataType.name} results={dataType.data} />
                    )) : <p>No Data Filtered</p>}

                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
  parsedData: state.parsedData,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);

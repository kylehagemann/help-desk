import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../actions/index";
import ResultsList from './ResultsList';
import Filters from './Filters';
import { formatData } from "../api/index";
import { createNodeArray } from "typescript";
import Checkbox from './Checkbox'

const OPTIONS = ["organizations", "tickets", "users", "exactMatch"];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterKey = this.handleFilterKey.bind(this);
        this.handleFilterValue = this.handleFilterValue.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.state = {
                        checkboxes: OPTIONS.reduce(
                            (options, option) => ({
                            ...options,
                            [option]: true
                            }),
                            {}
                        ),
                        filterKey: "", 
                        filterValue: "", 
                        filteredData: [], 
                    }
    }
  
    handleCheckboxChange = changeEvent => {
      const { name } = changeEvent.target;
  
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [name]: !prevState.checkboxes[name]
        }
      }));
    };



    componentDidMount() {
        this.props.dispatch(fetchData());
    }

    handleFilterKey(filterKey) {
        this.setState({ filterKey: filterKey});
    }

    handleFilterValue(filterValue) {
        this.setState({ filterValue: filterValue});
    }

    render() {
        const { error, loading, parsedData } = this.props;

        const { filterKey, 
                filterValue, 
                checkboxes
        } = this.state;

        let { filteredData } = this.state;
        
        const namesChecked = [];
        namesChecked.push('users');

        namesChecked.push('organizations');
    
        namesChecked.push('tickets');
        



        const myRegEx = new RegExp("^"+ filterKey + "$");
        const myRegEx2 = new RegExp("^"+ filterValue + "$");
        if (!checkboxes[ 'Exact Match' ]) {
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
                    return '';
                }
            );
        }
        else {
            filteredData = parsedData.map(element =>
                {
                    if (checkboxes[element.name])
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
                    return '';
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
                        handleFilterKey={this.handleFilterKey} 
                        handleFilterValue={this.handleFilterValue}
                        filterKey={filterKey}
                        filterValue={filterValue}
                        checkboxes={checkboxes}
                        myOptions={OPTIONS}
                        handleCheckboxChange={this.handleCheckboxChange} />
                </Row>
                <Row>
                    {(filteredData || []).map(dataType => (
                        <ResultsList key={dataType.name} id={dataType.name} results={dataType.data} />
                    ))}

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

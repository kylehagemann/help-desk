import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../actions/index";
import ResultsList from './ResultsList';
import Filters from './Filters';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterKey = this.handleFilterKey.bind(this);
        this.handleFilterValue = this.handleFilterValue.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.state = {filterKey: "", filterValue: "", filteredData: [], isChecked: false }
    }

    componentDidMount() {
        this.props.dispatch(fetchData());
    }

    handleFilterKey(filterKey) {
        this.setState({ filterKey: filterKey});
    }

    handleFilterValue(filterValue) {
        this.setState({ filterValue: filterValue});
    }

    handleChecked(isChecked) {
        this.setState({ isChecked: !this.state.isChecked })
    }

    render() {
        const { error, loading, collectedData } = this.props;
        const { filterKey, filterValue, isChecked } = this.state;
        let { filteredData } = this.state; 
        function replacer(key, val) {
            if (typeof val !== 'object' || !val) {
              return !val ? val="" : String(val);
          } 
          return val;
        }
        const parsedData = [];
        collectedData.forEach(element => {
            parsedData.push(JSON.parse(JSON.stringify(element), replacer));
        });
        const myRegEx = new RegExp("^"+ filterKey + "$");
        const myRegEx2 = new RegExp("^"+ filterValue + "$");
        let exactMatch = false;
        if (!exactMatch) {
            filteredData = parsedData.map(element =>
                {
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
            );
        }
        else {
            filteredData = parsedData.map(element =>
                {
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
                    <Filters filterData={this.handleFilterKey} filterData2={this.handleFilterValue}
                       checked={isChecked}
                       handleChecked={this.handleChecked} />
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
  collectedData: state.collectedData,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);

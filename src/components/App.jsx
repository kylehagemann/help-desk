import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { fetchData } from "../actions/index";
import ResultsList from './ResultsList';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData());
  }

    render() {
        const { error, loading, collectedData } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <Container>
                <Row>
                    {(collectedData || []).map(dataType => (
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

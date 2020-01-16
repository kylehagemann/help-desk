import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/index";
import Users from './Users';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData());
  }

    render() {
        const { error, loading, data } = this.props;
        const organizations = [];
        const tickets = [];
        const users = [];

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        for (const property in data) {
            console.log(property);
            if (data[property].name === "organizations") {
                organizations.push(data[property].data);
            }
            if (data[property].name === "tickets") {
                tickets.push(data[property].data);
            }
            if (data[property].name === "users") {
                users.push(data[property].data);
            }
        }

        return (
            <div className="row">
                <div className="col-md-4">
                    {(organizations[0] || []).map(organization => (
                        <li key={organization._id}>
                            <div>{organization.name}</div>
                        </li>
                    ))}
                </div>
                <div className="col-md-4">
                    {(tickets[0] || []).map(ticket => (
                        <li key={ticket._id}>
                            <div>{ticket.status}</div>
                        </li>
                    ))}
                </div>
                <div className="col-md-4">
                    {(users[0] || []).map(user => (
                        <li key={user._id}>
                            <div>{user.name}</div>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);

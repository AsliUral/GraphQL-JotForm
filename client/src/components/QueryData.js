import React from "react";
import { Query } from "react-apollo";
import Loader from "./Loader";

class QueryData extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Query query={this.props.currentQuery}>
                    {({ loading, error, data }) => {
                        this.props.setQueryResult({});
                        if (loading) return <Loader />;
                        if (error) {
                            this.props.setQueryResult(
                                ...error.networkError.result.errors
                            );
                            return "";
                        }
                        if (data) {
                            this.props.setQueryResult(data);
                            return "";
                        }
                        return "";
                    }}
                </Query>
            </>
        );
    }
}

export default QueryData;

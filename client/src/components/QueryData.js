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
                        if (loading) return <Loader />;
                        if (error) console.log(error);
                        if (data) {
                            this.props.setQueryResult(data);
                            return "";
                        } else {
                            const wrongQuery = {
                                Message: "Wrong Query",
                                Helper: "Please check docs",
                                Query: this.props.codeGraphql,
                            };
                            //this.setData(wrongQuery);
                            return "";
                        }
                    }}
                </Query>
            </>
        );
    }
}

export default QueryData;

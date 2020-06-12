import React from "react";
import { Query } from "react-apollo";
import Loader from "./Loader";

function QueryData(props) {
    return (
        <>
            <Query query={props.currentQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <Loader />;
                    if (error) {
                        props.setQueryError(error.networkError.result.errors);
                        return "";
                    }
                    if (data) {
                        props.setQueryResult(data);
                        return "";
                    }
                    return "";
                }}
            </Query>
        </>
    );
}

export default QueryData;

import React from "react";
import EditorAceResult from "../containers/EditorAceResultContainer";
import QueryData from "../containers/QueryDataContainer";

class QueryResult extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <EditorAceResult />
                <QueryData />
            </>
        );
    }
}

export default QueryResult;

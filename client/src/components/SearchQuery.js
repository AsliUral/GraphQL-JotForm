import Search from "react-search";
import ReactDOM from "react-dom";

import React, { Component, PropTypes } from "react";

class TestComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "Search query...",
            queries: ["userQuery", "userFormQuery"],
        };
    }
    updateSearch = (event) => {
        this.setState({
            search: event.target.value,
        });
    };

    render() {
        let queryF = this.state.queries.filter((query) => {
            return query.indexOf(this.state.search) !== -1;
        });
        return (
            <div>
                <u1>
                    {queryF.map((query) => {
                        return query;
                    })}
                </u1>
                <input
                    type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
            </div>
        );
    }
}

export default TestComponent;

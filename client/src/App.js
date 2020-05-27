import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import AceEditorGraphql from "./components/AceEditorGraphql";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import "bootswatch/dist/solar/bootstrap.min.css";
const client = new ApolloClient({
    uri: "/graphql",
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="container">
                    <h1>GraphQL</h1>
                </div>
                <AceEditorGraphql />
            </ApolloProvider>
        );
    }
}

export default App;

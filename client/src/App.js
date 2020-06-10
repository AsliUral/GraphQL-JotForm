import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import Editor from "./components/Editor";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import "bootswatch/dist/solar/bootstrap.min.css";
import Sidebar from "./containers/SideBarContainer";
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
                <Editor />
                <Sidebar />
            </ApolloProvider>
        );
    }
}

export default App;

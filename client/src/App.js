import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import AceEditorGraphql from "./components/AceEditorGraphql/AceEditorGraphql";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import "bootswatch/dist/solar/bootstrap.min.css";
import { Sidebar } from "./components/SideBarDocs/SideBarDocs";

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
                <Sidebar width={300} height={"100vh"}>
                    <h1>Asli Ural</h1>
                    <h1>Asli Ural</h1>
                    <h1>Asli Ural</h1>
                    <h1>Asli Ural</h1>
                    <h1>Asli Ural</h1>
                </Sidebar>
            </ApolloProvider>
        );
    }
}

export default App;

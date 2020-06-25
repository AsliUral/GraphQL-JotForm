import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import Editor from "./Editor";
import { ApolloProvider } from "react-apollo";
import "bootswatch/dist/solar/bootstrap.min.css";
import Sidebar from "../containers/SideBarContainer";
import { Redirect } from "react-router-dom";
const client = new ApolloClient({
    uri: "/graphql",
});

function Dashboard(props) {
    if (!props.auth.uid) return <Redirect to="/signin" />;
    return (
        <ApolloProvider client={client}>
            <Editor />
            <Sidebar />
        </ApolloProvider>
    );
}

export default Dashboard;

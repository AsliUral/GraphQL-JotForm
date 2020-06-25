import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import Editor from "./components/Editor";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootswatch/dist/solar/bootstrap.min.css";
import Sidebar from "./containers/SideBarContainer";
import Navbar from "./containers/NavbarContainer";
import Dashboard from "./containers/DashboarContainer";
import SignIn from "./containers/SignInContainer";
import SignUp from "./containers/SignUpContainer";
import SocialQl from "./containers/SocialQLContainer";
const client = new ApolloClient({
    uri: "/graphql",
});

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/socialQL" component={SocialQl} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

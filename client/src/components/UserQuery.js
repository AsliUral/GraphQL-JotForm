import React from "react";
import { render } from "react-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const User_QUERY = gql`
    query UserQuery {
        user {
            name
            email
            time_zone
            account_type
            status
            loginToGetSubmissions
            pdf_designer_group
        }
    }
`;

class UserQuery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeGraphql: "graph",
            codeJS: "JS",
        };
    }
    render() {
        return (
            <Query query={User_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <h4> Loading ...</h4>;
                    if (error) console.log(error);
                    //console.log(data.user);
                    return data.user.name;
                }}
            </Query>
        );
    }
}

export default UserQuery;

import React from "react";

import { Card, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryValidate = require("./QueryValidate");
const description = [].join(" ");

function SocailQL(props) {
    if (typeof props.queryMark !== "undefined") {
        return (
            <div>
                <ol>
                    {props.queryMark.map((result, i) => (
                        <div>
                            <Card>
                                <Card.Content header="Get Request User and UserForm" />
                                <Card.Content
                                    description={result.markedQuery}
                                />
                                <Card.Content extra>
                                    <Icon name="user" />
                                    {result.developerFirstName} /
                                    {result.developerEmail}
                                </Card.Content>
                            </Card>
                        </div>
                    ))}
                </ol>
            </div>
        );
    } else {
        return null;
    }
}
export default SocailQL;

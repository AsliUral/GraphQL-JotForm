import React from "react";
import ButtonB from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CodeBlock from "react-highlight-codeblock";
import "../style/SocialQl.css";
import { Icon, Label } from "semantic-ui-react";
import SidePanel from "./social/SidePanel";
import Messages from "../containers/MessagesContainer";
import { Grid } from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";

function SocialQL(props) {
    const history = useHistory();

    if (typeof props.queryMark === "undefined") {
        return <div></div>;
    }

    const handleClick = (markedQuery) => {
        props.runMarkedQueryfromSocialQL(markedQuery);
        history.push("/");
    };

    if (!props.auth.uid) return <Redirect to="/signin" />;

    return (
        <section class="container">
            <div class="page">
                <div class="left-half">
                    <div>
                        {props.queryMark.map((result, i) => (
                            <div class="social">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {result.header}
                                            <div class="tag">
                                                <Label as="a">
                                                    <Icon name="star" /> 23
                                                </Label>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            <CodeBlock
                                                code={result.markedQuery}
                                                callback={(code) =>
                                                    console.log(code)
                                                }
                                                editer={true}
                                                language="html"
                                                style="monokai"
                                                showLineNumbers={false}
                                            />
                                        </Card.Text>
                                        <ButtonB
                                            variant="danger"
                                            onClick={() =>
                                                handleClick(result.markedQuery)
                                            }
                                        >
                                            Run Query
                                        </ButtonB>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div class="tag">
                                            <Badge variant="primary">
                                                {result.tag[0]
                                                    ? result.tag[0]
                                                    : null}
                                            </Badge>
                                            <Badge variant="warning">
                                                {result.tag[1]
                                                    ? result.tag[1]
                                                    : null}
                                            </Badge>
                                            <Badge variant="success">
                                                {result.tag[2]
                                                    ? result.tag[2]
                                                    : null}
                                            </Badge>
                                        </div>
                                        <div class="user">
                                            <Icon name="user" />
                                            {result.developerFirstName} /
                                            {result.developerEmail}
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="right-half">
                    <Grid columns="equal" className="app">
                        <div></div>
                        <SidePanel />
                        <Grid.Column>
                            <Messages />
                        </Grid.Column>
                        <div></div>
                        <Grid.Column width={4}></Grid.Column>
                    </Grid>
                </div>
            </div>
        </section>
    );
}
export default SocialQL;

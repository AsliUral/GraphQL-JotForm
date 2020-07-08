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
function SocailQL(props) {
    if (typeof props.queryMark === "undefined") {
        return <div></div>;
    }

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
                                            Get Request User and UserForm
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
                                        <ButtonB variant="danger">
                                            Run Query
                                        </ButtonB>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div class="tag">
                                            <Badge variant="primary">
                                                Primary
                                            </Badge>
                                            <Badge variant="warning">
                                                Primary
                                            </Badge>
                                            <Badge variant="success">
                                                Primary
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
export default SocailQL;

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
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function StarQuery(props) {
    const history = useHistory();
    const handleClick = (markedQuery) => {
        props.runMarkedQueryfromSocialQL(markedQuery);
        history.push("/");
    };
    return (
        <section class="container">
            <div class="page">
                <div class="left-star-half">
                    <div>
                        <div class="starHeader">Queries you star</div>
                        <br></br>
                        {props.queryMark.map((result, i) => (
                            <div class="social">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {result.header}
                                            <div class="tag">
                                                <Label as="a">
                                                    <ToastContainer
                                                        autoClose={2000}
                                                    />
                                                    <Icon name="star" />
                                                    {result.star}
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
                <div class="right-star-half ">
                    <div class="starHeader">Starred queries</div>
                    <br></br>
                    <div>
                        {props.queryMark.map((result, i) => (
                            <div class="social">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            {result.header}
                                            <div class="tag">
                                                <Label as="a">
                                                    <ToastContainer
                                                        autoClose={2000}
                                                    />
                                                    <Icon name="star" />
                                                    {result.star}
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
            </div>
        </section>
    );
}
export default StarQuery;

import React from "react";
import ButtonB from "react-bootstrap/Button";
import Card, { CardBody } from "react-bootstrap/Card";
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
    let tempStarCount = 0;
    let tempStaredCount = 0;
    const history = useHistory();
    const handleClick = (markedQuery) => {
        props.runMarkedQueryfromSocialQL(markedQuery);
        history.push("/");
    };
    let tempStarCountInc = () => {
        tempStarCount = tempStarCount + 1;
    };

    let tempStaredCountInc = () => {
        tempStaredCount = tempStaredCount + 1;
    };
    return (
        <section class="container">
            <div class="page">
                <div class="left-star-half">
                    <div>
                        <div class="starHeader">Queries You Star</div>
                        <br></br>
                        {props.queryMark.map((result, i) => (
                            <div class="social">
                                {result.starList.includes(props.developerId) ? (
                                    <Card>
                                        {tempStarCountInc(tempStarCount)}
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
                                                    handleClick(
                                                        result.markedQuery
                                                    )
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
                                ) : null}
                            </div>
                        ))}
                        {tempStarCount == 0 ? (
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            You haven't stared a query yet. To
                                            star a query, go to socialQL and
                                            click the star image. You can easily
                                            find the queries you starred like
                                            this. ✨
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div class="right-star-half ">
                    <div class="starHeader">Starred Queries</div>
                    <br></br>
                    <div>
                        {props.queryMark.map((result, i) => (
                            <div class="social">
                                {result.developerId === props.developerId &&
                                result.star > 1 ? (
                                    <Card>
                                        {tempStaredCountInc()}
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
                                                    handleClick(
                                                        result.markedQuery
                                                    )
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
                                ) : null}
                            </div>
                        ))}
                        {tempStaredCount == 0 ? (
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        None of your queries are starred yet.
                                        Maybe you never shared a query? Write a
                                        query and post it. 🚀
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default StarQuery;

import React from "react";
import ButtonB from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import CodeBlock from "react-highlight-codeblock";
import "../style/SocialQl.css";
import { Icon, Label, Input } from "semantic-ui-react";
import SidePanel from "./social/SidePanel";
import Messages from "../containers/MessagesContainer";
import { Grid } from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function SocialQL(props) {
    const history = useHistory();

    if (typeof props.queryMark === "undefined") {
        return <div></div>;
    }

    const handleClick = (markedQuery) => {
        props.runMarkedQueryfromSocialQL(markedQuery);
        history.push("/");
    };
    const addStarQuery = (markedQuery, star, starList) => {
        if (starList.includes(props.developerId)) {
            toast("⭐ You've already starred this query ");
        } else {
            props.starQuery(markedQuery, star, starList);
        }
    };

    const viewQuery = () => {
        if (props.queryMarkStore.length === 0) {
            return props.queryMark.map((result, i) => (
                <div class="social">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {result.header}
                                <div class="tag">
                                    <Label
                                        as="a"
                                        onClick={() =>
                                            addStarQuery(
                                                result.markedQuery,
                                                result.star,
                                                result.starList
                                            )
                                        }
                                    >
                                        <ToastContainer autoClose={2000} />
                                        <Icon name="star" />
                                        {result.star}
                                    </Label>
                                </div>
                            </Card.Title>
                            <Card.Text>
                                <CodeBlock
                                    code={result.markedQuery}
                                    callback={(code) => console.log(code)}
                                    editer={true}
                                    language="html"
                                    style="monokai"
                                    showLineNumbers={false}
                                />
                            </Card.Text>
                            <ButtonB
                                variant="danger"
                                onClick={() => handleClick(result.markedQuery)}
                            >
                                Run Query
                            </ButtonB>
                        </Card.Body>
                        <Card.Footer>
                            <div class="tag">
                                <Badge variant="primary">
                                    {result.tag[0] ? result.tag[0] : null}
                                </Badge>
                                <Badge variant="warning">
                                    {result.tag[1] ? result.tag[1] : null}
                                </Badge>
                                <Badge variant="success">
                                    {result.tag[2] ? result.tag[2] : null}
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
            ));
        }
        return props.queryMarkStore.map((result, i) => (
            <div class="social">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {result.header}
                            <div class="tag">
                                <Label
                                    as="a"
                                    onClick={() =>
                                        addStarQuery(
                                            result.markedQuery,
                                            result.star,
                                            result.starList
                                        )
                                    }
                                >
                                    <ToastContainer autoClose={2000} />
                                    <Icon name="star" />
                                    {result.star}
                                </Label>
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <CodeBlock
                                code={result.markedQuery}
                                editer={true}
                                language="html"
                                style="monokai"
                                showLineNumbers={false}
                            />
                        </Card.Text>
                        <ButtonB
                            variant="danger"
                            onClick={() => handleClick(result.markedQuery)}
                        >
                            Run Query
                        </ButtonB>
                    </Card.Body>
                    <Card.Footer>
                        <div class="tag">
                            <Badge variant="primary">
                                {result.tag[0] ? result.tag[0] : null}
                            </Badge>
                            <Badge variant="warning">
                                {result.tag[1] ? result.tag[1] : null}
                            </Badge>
                            <Badge variant="success">
                                {result.tag[2] ? result.tag[2] : null}
                            </Badge>
                        </div>
                        <div class="user">
                            <Icon name="user" />
                            {result.developerFirstName} /{result.developerEmail}
                        </div>
                    </Card.Footer>
                </Card>
            </div>
        ));
    };

    const searchSpace = (event) => {
        let keyword = event.target.value;
        props.searchTag(keyword, props.queryMark);
        viewQuery();
    };
    if (!props.auth.uid) return <Redirect to="/signin" />;

    return (
        <section class="container">
            <div class="page">
                <div class="left-half">
                    <div>
                        <div>
                            <Input
                                size="mini"
                                icon="search"
                                placeholder="Search query's tag"
                                onChange={(e) => searchSpace(e)}
                            />
                        </div>
                        {viewQuery()}
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

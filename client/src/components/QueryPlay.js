import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QueryPlay(props) {
    const resultPlay = () => {
        const str = props.query.replace(/\s+/g, "");
        const conditionsArray = [
            str === "",
            str === "{",
            str === "}",
            str === "{}",
        ];
        if (conditionsArray.includes(true)) {
            toast("👽 Oops, something went wrong.. GraphQL-Syntax Error ");
        } else {
            props.resultOfPlay();
        }
    };
    return (
        <>
            <Button animated="vertical" onClick={resultPlay}>
                <Button.Content hidden>Run</Button.Content>
                <Button.Content visible>
                    <Icon name="play circle outline" />
                </Button.Content>
                <ToastContainer autoClose={2000} />
            </Button>
        </>
    );
}

export default QueryPlay;

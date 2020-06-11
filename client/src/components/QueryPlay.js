import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class QueryPlay extends React.Component {
    constructor(props) {
        super(props);
    }
    resultPlay = () => {
        const str = this.props.query.replace(/\s+/g, "");
        const conditionsArray = [
            str === "",
            str === "{",
            str === "}",
            str === "{}",
        ];
        if (conditionsArray.includes(true)) {
            toast("👽 Oops, something went wrong.. GraphQL-Syntax Error ");
        } else {
            this.props.resultOfPlay();
        }
    };
    render() {
        return (
            <>
                <Button animated="vertical" onClick={this.resultPlay}>
                    <Button.Content hidden>Run</Button.Content>
                    <Button.Content visible>
                        <Icon name="play circle outline" />
                    </Button.Content>
                    <ToastContainer autoClose={2000} />
                </Button>
            </>
        );
    }
}

export default QueryPlay;

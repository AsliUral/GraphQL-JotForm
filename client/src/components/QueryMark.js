import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function QueryMark(props) {
    const onClick = () => {
        props.addMarkQuery(props.query);
        toast(" 🦄 The Query was added in marked query sidebar ");
    };
    return (
        <>
            <Button animated="vertical" onClick={onClick}>
                <Button.Content hidden> Query Mark </Button.Content>
                <Button.Content visible>
                    <Icon name="bookmark" />
                </Button.Content>
                <ToastContainer autoClose={2000} />
            </Button>
        </>
    );
}

export default QueryMark;

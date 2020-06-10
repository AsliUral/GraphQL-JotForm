import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class QueryMark extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = () => {
        this.props.addMarkQuery();
        toast(" 🦄 The Query was added in marked query sidebar ");
    };
    render() {
        return (
            <>
                <Button animated="vertical" onClick={this.onClick}>
                    <Button.Content hidden> Query Mark </Button.Content>
                    <Button.Content visible>
                        <Icon name="bookmark" />
                    </Button.Content>
                    <ToastContainer autoClose={2000} />
                </Button>
            </>
        );
    }
}

export default QueryMark;

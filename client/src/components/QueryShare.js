import React from "react";
import { Button, Icon } from "semantic-ui-react";

function QueryShare(props) {
    return (
        <Button animated="vertical" onClick={props.prettifyQuery}>
            <Button.Content hidden>Share Query</Button.Content>
            <Button.Content visible>
                <Icon name="external share" />
            </Button.Content>
        </Button>
    );
}
export default QueryShare;

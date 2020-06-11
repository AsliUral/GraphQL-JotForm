import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Prettify(props) {
    return (
        <Button animated="vertical" onClick={props.prettifyQuery}>
            <Button.Content hidden>Prettify</Button.Content>
            <Button.Content visible>
                <Icon name="leaf" />
            </Button.Content>
        </Button>
    );
}
export default Prettify;

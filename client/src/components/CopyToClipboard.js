import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function CopyClipBoard(props) {
    return (
        <CopyToClipboard text={props.query}>
            <Button animated="vertical">
                <Button.Content hidden>Copy</Button.Content>
                <Button.Content visible>
                    <Icon name="copy" />
                </Button.Content>
            </Button>
        </CopyToClipboard>
    );
}

export default CopyClipBoard;

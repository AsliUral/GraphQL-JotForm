import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class CopyClipBoard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <CopyToClipboard
                text={this.props.copy}
                style={{
                    position: "absolute",
                    right: "40px",
                }}
            >
                <Button animated="vertical">
                    <Button.Content hidden>Copy</Button.Content>
                    <Button.Content visible>
                        <Icon name="copy" />
                    </Button.Content>
                </Button>
            </CopyToClipboard>
        );
    }
}

export default CopyClipBoard;

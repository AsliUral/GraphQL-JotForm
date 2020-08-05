import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

function CopyClipBoard(props) {
    return (
        <CopyToClipboard text={props.query}>
            {/* <Button animated="vertical">
                <Button.Content hidden>Copy</Button.Content>
                <Button.Content visible>
                    <Icon name="copy" />
                </Button.Content>
            </Button> */}
            <div>
                <button data-tip className="bar" data-for="copyTip">
                    <Icon name="copy" />
                </button>
                <ReactTooltip id="copyTip" place="bottom" effect="solid">
                    Copy To Clipboard
                </ReactTooltip>
            </div>
        </CopyToClipboard>
    );
}

export default CopyClipBoard;

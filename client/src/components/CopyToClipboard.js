import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

function CopyClipBoard(props) {
    return (
        <CopyToClipboard text={props.query}>
            <div>
                <button data-tip className="bar" data-for="copyTip">
                    <Icon name="copy" color="orange" />
                </button>
                <ReactTooltip id="copyTip" place="bottom" effect="solid">
                    Copy To Clipboard
                </ReactTooltip>
            </div>
        </CopyToClipboard>
    );
}

export default CopyClipBoard;

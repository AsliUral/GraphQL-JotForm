import React from "react";
import { Button, Icon } from "semantic-ui-react";
import ReactTooltip from "react-tooltip";

function Prettify(props) {
    return (
        <div style={{ zIndex: 999 }}>
            {/* <Button
                animated="vertical"
                data-tip
                data-for="prettifyTip"
                onClick={props.prettifyQuery}
            >
                <Button.Content hidden>Prettify</Button.Content>
                <Button.Content visible>
                    <Icon name="leaf" />
                </Button.Content>
            </Button> */}
            <button
                data-tip
                className="bar"
                data-for="prettifyTip"
                onClick={props.prettifyQuery}
            >
                <Icon name="leaf" />
            </button>
            <ReactTooltip id="prettifyTip" place="bottom" effect="solid">
                Prettify
            </ReactTooltip>
        </div>
    );
}
export default Prettify;

import React from "react";
import { Button, Icon } from "semantic-ui-react";
import ReactTooltip from "react-tooltip";

function Prettify(props) {
    return (
        <div>
            <button
                data-tip
                className="bar"
                data-for="prettifyTip"
                onClick={props.prettifyQuery}
            >
                <Icon name="leaf" color="pink" />
            </button>
            <ReactTooltip id="prettifyTip" place="bottom" effect="solid">
                Prettify
            </ReactTooltip>
        </div>
    );
}
export default Prettify;

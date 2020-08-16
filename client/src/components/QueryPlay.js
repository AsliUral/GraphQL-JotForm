import React from "react";

import { Button, Icon } from "semantic-ui-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from "react-tooltip";

const queryValidate = require("./QueryValidate");

function QueryPlay(props) {
    const resultPlay = () => {
        if (queryValidate(props.query)) {
            toast("👽 Oops, something went wrong.. GraphQL-Syntax Error ");
        } else {
            props.runResult();
        }
    };
    return (
        <>
            <div>
                <button
                    data-tip
                    className="bar"
                    data-for="runTip"
                    onClick={resultPlay}
                >
                    <Icon name="play circle outline" color="purple" />
                </button>
                <ReactTooltip id="runTip" place="bottom" effect="solid">
                    Run Query
                </ReactTooltip>
                <ToastContainer autoClose={2000} />
            </div>
        </>
    );
}

export default QueryPlay;

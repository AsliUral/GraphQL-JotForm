import React from "react";
import CopyToClipboard from "./CopyToClipboard";

function SideBarMarkedQueryTab(props) {
    if (
        typeof props.queryMark !== "undefined" &&
        typeof props.email !== "undefined"
    ) {
        return (
            <ol>
                {props.queryMark.map((result, i) => (
                    <div>
                        {result.developerEmail === props.email ? (
                            <li key={i}>{result.markedQuery}</li>
                        ) : null}
                    </div>
                ))}
            </ol>
        );
    } else {
        return null;
    }
}

export default SideBarMarkedQueryTab;

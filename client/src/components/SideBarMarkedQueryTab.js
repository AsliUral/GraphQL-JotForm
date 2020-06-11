import React from "react";
import CopyToClipboard from "./CopyToClipboard";

function SideBarMarkedQueryTab(props) {
    return props.queryMark.map((q) => {
        return (
            <div>
                <CopyToClipboard text={q} />
                <li> {q}</li>
            </div>
        );
    });
}

export default SideBarMarkedQueryTab;

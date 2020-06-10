import React from "react";
import CopyToClipboard from "./CopyToClipboard";

class SideBarMarkedQueryTab extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.queryMark.map((q) => {
            return (
                <div>
                    <CopyToClipboard text={q} />
                    <li> {q}</li>
                </div>
            );
        });
    }
}

export default SideBarMarkedQueryTab;

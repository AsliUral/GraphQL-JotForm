import "../style/Sidebar.css";
import React from "react";
import SideBarTabView from "./SideBarTabView";
import SideBarPin from "../containers/SideBarPinContainer";
import SideBarUnPin from "../containers/SideBarUnPinContainer";

class SideBarContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {this.props.sidebarDocked ? <SideBarUnPin /> : <SideBarPin />}
                <SideBarTabView />
            </>
        );
    }
}

export default SideBarContent;

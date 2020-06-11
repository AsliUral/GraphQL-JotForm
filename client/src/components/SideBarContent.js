import "../style/Sidebar.css";
import React from "react";
import SideBarTabView from "./SideBarTabView";
import SideBarPin from "../containers/SideBarPinContainer";
import SideBarUnPin from "../containers/SideBarUnPinContainer";

function SideBarContent(props) {
    return (
        <>
            {props.sidebarDocked ? <SideBarUnPin /> : <SideBarPin />}
            <SideBarTabView />
        </>
    );
}

export default SideBarContent;

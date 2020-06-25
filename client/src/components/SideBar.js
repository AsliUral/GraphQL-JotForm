import "../style/Sidebar.css";
import React from "react";
import Sidebar from "react-sidebar";
import SideBarButton from "../containers/SideBarButtonContainer";
import SideBarContent from "../containers/SideBarContentContainer";

function SideBar(props) {
    let sideBarCss;
    if (props.sidebarOpen) {
        sideBarCss = {};
    } else {
        sideBarCss = { float: "right", position: "relative" };
    }
    return (
        <div id={"debug1"} style={sideBarCss}>
            <Sidebar
                id={"debug2"}
                sidebar={<SideBarContent />}
                open={props.sidebarOpen}
                onSetOpen={props.onSetSidebarOpen}
                pullRight={true}
                touch={true}
                shadow={false}
                docked={props.sidebarDocked}
                styles={{
                    sidebar: {
                        background: "white",
                        width: 300,
                        zIndex: 2,
                        insert: "unset",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        transition: "transform .3s ease-out",
                        WebkitTransition: "-webkit-transform .3s ease-out",
                        willChange: "transform",
                        overflowY: "auto",
                    },
                }}
            />
            <SideBarButton />
        </div>
    );
}

export default SideBar;

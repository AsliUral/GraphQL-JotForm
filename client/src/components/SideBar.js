import "../style/Sidebar.css";
import React from "react";
import Sidebar from "react-sidebar";
import SideBarButton from "../containers/SideBarButtonContainer";
import SideBarContent from "../containers/SideBarContentContainer";

function SideBar(props) {
    return (
        <>
            <Sidebar
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
                    },
                }}
            />
            <SideBarButton />
        </>
    );
}

export default SideBar;

import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

function SideBarButton(props) {
    return (
        <>
            {props.sidebarOpen ? null : (
                <Button
                    animated="vertical"
                    className="toggle-menu"
                    onClick={() => props.onSetSidebarOpen(true)}
                    style={{
                        transform: `translate(${props.width}px, 20vh)`,
                        right: "0",
                    }}
                >
                    <Button.Content hidden>Docs</Button.Content>
                    <Button.Content visible></Button.Content>
                </Button>
            )}
        </>
    );
}

export default SideBarButton;

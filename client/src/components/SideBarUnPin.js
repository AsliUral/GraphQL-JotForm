import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

function SideBarUnPin(props) {
    return (
        <>
            <Button
                animated="vertical"
                onClick={() => {
                    props.pinSideBar(false);
                }}
            >
                <Button.Content hidden>Unpin Sidebar</Button.Content>
                <Button.Content visible>
                    <Icon name="lock open" />
                </Button.Content>
            </Button>
        </>
    );
}

export default SideBarUnPin;

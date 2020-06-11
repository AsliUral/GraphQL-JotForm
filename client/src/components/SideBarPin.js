import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

function SideBarPin(props) {
    return (
        <>
            <Button
                animated="vertical"
                onClick={() => {
                    props.pinSideBar(true);
                }}
            >
                <Button.Content hidden>Pin Sidebar</Button.Content>
                <Button.Content visible>
                    <Icon name="lock" />
                </Button.Content>
            </Button>
        </>
    );
}

export default SideBarPin;

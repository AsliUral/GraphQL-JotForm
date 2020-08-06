import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

function SideBarPin(props) {
    return (
        <>
            <Button
                basic
                color="pink"
                onClick={() => {
                    props.pinSideBar(true);
                }}
            >
                <Button.Content />
                <Button.Content visible>
                    <Icon name="lock" />
                </Button.Content>
            </Button>
        </>
    );
}

export default SideBarPin;

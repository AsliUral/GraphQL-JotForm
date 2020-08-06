import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

function SideBarUnPin(props) {
    return (
        <>
            <Button
                basic
                color="grey"
                onClick={() => {
                    props.pinSideBar(false);
                }}
            >
                <Button.Content />
                <Button.Content visible>
                    <Icon name="lock open" />
                </Button.Content>
            </Button>
        </>
    );
}

export default SideBarUnPin;

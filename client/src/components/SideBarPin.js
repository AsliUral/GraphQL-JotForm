import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

class SideBarPin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Button
                    animated="vertical"
                    onClick={() => {
                        this.props.pinSideBar(true);
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
}

export default SideBarPin;

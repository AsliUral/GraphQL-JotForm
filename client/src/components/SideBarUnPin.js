import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

class SideBarUnPin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Button
                    animated="vertical"
                    onClick={() => {
                        this.props.pinSideBar(false);
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
}

export default SideBarUnPin;

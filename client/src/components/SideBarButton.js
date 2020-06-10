import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";

class SideBarButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {this.props.sidebarOpen ? null : (
                    <Button
                        animated="vertical"
                        className="toggle-menu"
                        onClick={() => this.props.onSetSidebarOpen(true)}
                        style={{
                            transform: `translate(${this.props.width}px, 20vh)`,
                            position: "absolute",
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
}

export default SideBarButton;

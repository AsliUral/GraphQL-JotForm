import "./SideBarDocs/Sidebar.css";
// import React from "react";
// import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import React from "react";
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 800px)`);

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

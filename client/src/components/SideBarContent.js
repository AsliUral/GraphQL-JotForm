import "./SideBarDocs/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";
import AccordionExampleNested from "../components/SideBarDocs/AccordionQueryList/AccordionQueryList";

const mql = window.matchMedia(`(min-width: 800px)`);

class SideBarContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {this.props.sidebarDocked ? (
                    <Button
                        animated="vertical"
                        onClick={this.props.pinSideBar(true)}
                    >
                        <Button.Content hidden>Unpin Sidebar</Button.Content>
                        <Button.Content visible>
                            <Icon name="lock open" />
                        </Button.Content>
                    </Button>
                ) : (
                    <Button
                        animated="vertical"
                        onClick={this.props.pinSideBar(false)}
                    >
                        <Button.Content hidden>Pin Sidebar</Button.Content>
                        <Button.Content visible>
                            <Icon name="lock" />
                        </Button.Content>
                    </Button>
                )}
                <AccordionExampleNested />
            </>
        );
    }
}

export default SideBarContent;

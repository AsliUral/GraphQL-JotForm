import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";

import React from "react";
import Sidebar from "react-sidebar";
import SideBarButton from "../containers/SideBarButtonContainer";
import SideBarContent from "../containers/SideBarContentContainer";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.onSetSidebarOpen = this.props.onSetSidebarOpen.bind(this);
    }
    render() {
        return (
            <>
                <Sidebar
                    sidebar={<SideBarContent />}
                    open={this.props.sidebarOpen}
                    onSetOpen={this.props.onSetSidebarOpen}
                    pullRight={true}
                    touch={true}
                    shadow={false}
                    docked={this.props.sidebarDocked}
                    styles={{
                        sidebar: {
                            background: "white",
                            width: 300,
                        },
                    }}
                />
                <SideBarButton />
            </>
        );
    }
}

export default SideBar;

import "../style/Sidebar.css";
import { Button, Icon } from "semantic-ui-react";
import React from "react";
import AccordionExampleNested from "./AccordionQueryList";
import SideBarPin from "../containers/SideBarPinContainer";
import SideBarUnPin from "../containers/SideBarUnPinContainer";

const mql = window.matchMedia(`(min-width: 800px)`);

class SideBarContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {console.log(this.props.sidebarDocked)}
                {this.props.sidebarDocked ? <SideBarUnPin /> : <SideBarPin />}
                <AccordionExampleNested />
            </>
        );
    }
}

export default SideBarContent;

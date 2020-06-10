import React from "react";
import { Tab } from "semantic-ui-react";
import SideBarSchemaTab from "./SideBarSchemaTab";
import SideBarMarkedQueryTab from "../containers/SideBarMarkedQueryTabContainer";

class SideBarTabView extends React.Component {
    constructor(props) {
        super(props);
    }
    panes = [
        {
            menuItem: "Marked Query",
            render: () => (
                <Tab.Pane>
                    <SideBarMarkedQueryTab />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Schema Details",
            render: () => (
                <Tab.Pane>
                    <SideBarSchemaTab />
                </Tab.Pane>
            ),
        },
    ];

    render() {
        return (
            <div>
                <h1> JotForm Query</h1>
                <Tab panes={this.panes} />
            </div>
        );
    }
}

export default SideBarTabView;

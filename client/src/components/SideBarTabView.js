import React from "react";
import { Tab } from "semantic-ui-react";
import SideBarSchemaTab from "./SideBarSchemaTab";
import SideBarMarkedQueryTab from "../containers/SideBarMarkedQueryTabContainer";

function SideBarTabView() {
    const panes = [
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

    return (
        <div>
            <h1> JotForm Query</h1>
            <Tab panes={panes} />
        </div>
    );
}

export default SideBarTabView;

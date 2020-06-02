// import React from "react";
// import { Accordion } from "semantic-ui-react";

// const level1Panels = [
//     { key: "panel-1a", title: "Level 1A", content: "Level 1A Contents" },
//     { key: "panel-ba", title: "Level 1B", content: "Level 1B Contents" },
// ];

// const Level1Content = (
//     <div>
//         Welcome to level 1
//         <Accordion.Accordion panels={level1Panels} />
//     </div>
// );

// const level2Panels = [
//     { key: "panel-2a", title: "Level 2A", content: "Level 2A Contents" },
//     { key: "panel-2b", title: "Level 2B", content: "Level 2B Contents" },
// ];

// const Level2Content = (
//     <div>
//         Welcome to level 2
//         <Accordion.Accordion panels={level2Panels} />
//     </div>
// );

// const rootPanels = [
//     { key: "panel-1", title: "Level 1", content: { content: Level1Content } },
//     { key: "panel-2", title: "Level 2", content: { content: Level2Content } },
// ];

// const AccordionExampleNested = () => (
//     <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
// );

// export default AccordionExampleNested;

import "./Sidebar.css";
import React from "react";
import { Button, Icon } from "semantic-ui-react";

export const Sidebar = ({ width, height, children }) => {
    const [xPosition, setX] = React.useState(-width);

    //when clicked, xPosition should be change
    const toggleMenu = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    };

    // after first render component
    React.useEffect(() => {
        setX(-width);
    }, []); // componentDidMount

    return (
        <React.Fragment>
            <div
                className="side-bar"
                style={{
                    transform: `translatex(${xPosition}px)`,
                    width: width,
                    minHeight: height,
                }}
            >
                <Button
                    animated="vertical"
                    className="toggle-menu"
                    onClick={() => toggleMenu()}
                    style={{
                        transform: `translate(${width}px, 20vh)`,
                    }}
                >
                    <Button.Content hidden>Docs</Button.Content>
                    <Button.Content visible>
                        <Icon
                            className="toggle-menu"
                            style={{
                                transform: `translate(${width}px, 20vh)`,
                            }}
                            name="bookmark"
                        />
                    </Button.Content>
                </Button>
                <div className="content">{children}</div>
            </div>
        </React.Fragment>
    );
};

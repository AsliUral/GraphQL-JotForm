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

import "./Sidebar.css";
import React from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import WindowSizeListener from "react-window-size-listener";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleMenu = () => {
        console.log("toggle menu ilk xPos", this.props.xPosition);
        if (this.props.xPosition === 0) {
            this.props.setXPosition(300);
            console.log("toggle", this.props.xPosition);
        } else {
            this.props.setXPosition(0);
            console.log("toggle", this.props.xPosition);
        }
    };

    // after first render component
    useEffect() {
        this.props.setXPosition(0);
    } // componentDidMount
    render() {
        return (
            <React.Fragment>
                <div
                    className="side-bar"
                    style={{
                        transform: `translatex(${this.props.xPosition}px)`,
                        width: this.props.width,
                        minHeight: this.props.height,
                    }}
                >
                    <Button
                        animated="vertical"
                        className="toggle-menu"
                        onClick={() => this.toggleMenu()}
                        style={{
                            transform: `translate(${this.props.width}px, 20vh)`,
                        }}
                    >
                        <Button.Content hidden>Docs</Button.Content>
                        <Button.Content visible></Button.Content>
                    </Button>
                    <div className="content">{this.props.children}</div>
                </div>
                <WindowSizeListener
                    onResize={(windowSize) => {
                        console.log("Window height", windowSize.windowHeight);
                        console.log("Window width", windowSize.windowWidth);
                    }}
                />
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        xPosition: state.xPosition,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setXPosition: (value) => dispatch({ type: "SETXPOSITION", val: value }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

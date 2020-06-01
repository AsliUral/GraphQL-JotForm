import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

class LoaderAnimation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Segment
                    style={{
                        position: "absolute",
                        right: "40px",
                        width: "700px",
                    }}
                >
                    <Dimmer
                        active
                        style={{
                            position: "absolute",
                            right: "40px",
                            width: "700px",
                            height: "700px",
                        }}
                    >
                        <Loader
                            style={{
                                position: "absolute",
                                right: "40px",
                                width: "700px",
                            }}
                        >
                            Loading
                        </Loader>
                    </Dimmer>
                </Segment>
            </div>
        );
    }
}

export default LoaderAnimation;

import React from "react";

import { Button, Icon } from "semantic-ui-react";

class QueryPlay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Button animated="vertical" onClick={this.props.resultOfPlay}>
                    <Button.Content hidden>Run</Button.Content>
                    <Button.Content visible>
                        <Icon name="play circle outline" />
                    </Button.Content>
                </Button>
            </>
        );
    }
}

export default QueryPlay;

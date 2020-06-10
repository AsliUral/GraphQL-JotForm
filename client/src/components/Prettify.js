import React from "react";
import { Button, Icon } from "semantic-ui-react";

class Prettify extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button animated="vertical" onClick={this.props.prettifyQuery}>
                <Button.Content hidden>Prettify</Button.Content>
                <Button.Content visible>
                    <Icon name="leaf" />
                </Button.Content>
            </Button>
        );
    }
}
export default Prettify;

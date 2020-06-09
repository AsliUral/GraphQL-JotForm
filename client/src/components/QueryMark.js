import React from "react";

import { Button, Icon } from "semantic-ui-react";

class QueryMark extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Button animated="vertical" onClick={this.props.addMarkQuery}>
                    <Button.Content hidden> Query Mark </Button.Content>
                    <Button.Content visible>
                        <Icon name="bookmark" />
                    </Button.Content>
                </Button>
            </>
        );
    }
}

export default QueryMark;

import React from "react";
import Channels from "../../containers/ChannelContainer";
import DirectMessages from "../../containers/DirectMessageContainer";
import { Menu, Grid, Header, Icon } from "semantic-ui-react";
function SidePanel() {
    return (
        <>
            <div>SidePanel</div>
            <Menu
                size="large"
                inverted
                fixed="right"
                vertical
                style={{ background: "#00212a", fontSize: "1.2rem" }}
            >
                <Grid style={{ background: "#00212a" }}>
                    <Grid.Column>
                        <Grid.Row style={{ padding: "1.2em" }}>
                            <Header vertical inverted floated="right" as="h3">
                                <Icon name="code">
                                    <Header.Content> ChatQL</Header.Content>
                                </Icon>
                            </Header>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
                <Channels />
                <DirectMessages />
            </Menu>
        </>
    );
}

export default SidePanel;

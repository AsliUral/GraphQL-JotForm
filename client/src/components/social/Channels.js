import React from "react";
import {
    Menu,
    Icon,
    Modal,
    From,
    Input,
    Form,
    Button,
} from "semantic-ui-react";

function Channels(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid(props)) {
            props.addChannel(props);
        }
    };

    if (typeof props.channels === "undefined") {
        return <div></div>;
    }
    if (props.currentChannel === "") {
        props.setCurrentChannel(props.channels[0]);
    }

    const handleChange = (event) => {
        if (event.target.id === "channelName") {
            props.setChannelNameValue(event.target.value);
        } else if (event.target.id === "channelDetails") {
            props.setChannelDetailsValue(event.target.value);
        }
    };

    const isFormValid = ({ channelName, channelDetails }) =>
        channelName && channelDetails;

    const { channelModal } = props;
    return (
        <React.Fragment>
            <Menu.Menu className="menu">
                <Menu.Item>
                    <span>
                        <Icon name="exchange" /> Channels
                    </span>
                    ({props.channels.length}
                    )
                    <Icon name="add" onClick={() => props.setOpenModal(true)} />
                </Menu.Item>
                {props.channels.map((result, i) => (
                    <Menu.Item
                        key={result.id}
                        onClick={() => props.setCurrentChannel(result)}
                        name={result.channelName}
                        style={{ opacity: 0.7 }}
                        active={result.id === props.currentChannel.id}
                    >
                        #{result.channelName}
                    </Menu.Item>
                ))}
            </Menu.Menu>
            <Modal basic open={channelModal}>
                <Modal.Header>Add a Channel</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <Input
                                fluid
                                label="Name of Channel"
                                name="channelName"
                                id="channelName"
                                onChange={handleChange}
                            ></Input>
                        </Form.Field>
                        <Form.Field>
                            <Input
                                fluid
                                label="About the Channel"
                                name="channelDetails"
                                id="channelDetails"
                                onChange={handleChange}
                            ></Input>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green" inverted onClick={handleSubmit}>
                        <Icon name="checkmark" /> Add
                    </Button>
                    <Button
                        color="red"
                        inverted
                        onClick={() => props.setOpenModal(false)}
                    >
                        <Icon name="remove" /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        </React.Fragment>
    );
}

export default Channels;

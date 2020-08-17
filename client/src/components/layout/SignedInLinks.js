import React from "react";
import { NavLink } from "react-router-dom";
import {
    Dropdown,
    Icon,
    Button,
    Menu,
    Modal,
    Header,
    Checkbox,
    Form,
    Input,
    Radio,
} from "semantic-ui-react";
import { Redirect, useHistory } from "react-router-dom";

const SignedInLinks = (props) => {
    const history = useHistory();

    const { profile } = props;
    const trigger = (
        <span>
            <Icon name="user" style={{ color: "#fcc5f2" }} /> Hello {""}
            {profile.firstName}
        </span>
    );

    return (
        <div
            class="collapse navbar-collapse flex-grow-0 ml-auto"
            id="navbarSupportedContent"
        >
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item active">
                    <a class="nav-link">
                        <Menu.Menu>
                            <Dropdown
                                direction="left"
                                trigger={trigger}
                                style={{ zIndex: "310" }}
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        text={
                                            <span>
                                                Signed in
                                                <strong>
                                                    {} {profile.firstName}{" "}
                                                    {profile.lastName}
                                                </strong>
                                            </span>
                                        }
                                    />
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        icon="user circle"
                                        text="Your Profile"
                                    />
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        icon="star"
                                        text="Your Stars"
                                        onClick={() =>
                                            history.push("/starQuery")
                                        }
                                    />
                                    <Dropdown.Divider />
                                    <Modal
                                        open={props.modal}
                                        trigger={
                                            <Dropdown.Item
                                                icon="setting"
                                                text="Settings"
                                                onClick={() =>
                                                    props.setOpenModalSettings(
                                                        true
                                                    )
                                                }
                                            />
                                        }
                                        style={{
                                            height: "auto",
                                            top: "auto",
                                            left: "auto",
                                            bottom: "auto",
                                            right: "auto",
                                        }}
                                    >
                                        <Modal.Header>
                                            {props.profile.firstName}{" "}
                                            {props.profile.lastName}
                                        </Modal.Header>
                                        <Modal.Content>
                                            <Modal.Description>
                                                <Header>
                                                    Profile Settings
                                                </Header>

                                                <Checkbox
                                                    label="Prettify Query Automatically "
                                                    toggle
                                                />
                                                <Form.Group inline>
                                                    <label>
                                                        Delete Query History
                                                    </label>
                                                    <Form.Field
                                                        control={Radio}
                                                        label="1 day"
                                                        value="1 day"
                                                    />
                                                    <Form.Field
                                                        control={Radio}
                                                        label="1 week"
                                                        value="1 week"
                                                    />
                                                    <Form.Field
                                                        control={Radio}
                                                        label="1 month"
                                                        value="1 month"
                                                    />
                                                </Form.Group>
                                                <Form.Field
                                                    control={Input}
                                                    label="Api Key "
                                                    placeholder="Enter to change api key"
                                                />
                                            </Modal.Description>
                                        </Modal.Content>
                                    </Modal>

                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        icon="log out"
                                        text="Log Out"
                                        onClick={props.signOut}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default SignedInLinks;

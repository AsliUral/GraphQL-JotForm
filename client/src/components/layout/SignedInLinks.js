import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Icon, Button, Menu } from "semantic-ui-react";

const SignedInLinks = (props) => {
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
                            <Dropdown direction="left" trigger={trigger}>
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
                                    />
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        icon="setting"
                                        text="Settings"
                                    />
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

import React from "react";
import { Menu, Icon } from "semantic-ui-react";

function DirectMessages(props) {
    if (typeof props.users === "undefined") {
        return <div></div>;
    }
    if (typeof props.presence === "undefined") {
        return <div></div>;
    }

    let isUserOnline = (email) => {
        let obj = {};
        props.presence.map((pre) => {
            if (pre.email === email) {
                obj = pre;
            }
        });
        if (obj.status) {
            return "green";
        } else {
            return "red";
        }
    };

    return (
        <Menu.Menu className="menu">
            <Menu.Item>
                <span>
                    <Icon name="mail" /> Direct Messages
                </span>
                ({props.users.length})
                <Icon
                    name="add"
                    onClick={() =>
                        props.addOnline(props.currentUser, props.auth)
                    }
                />
                {props.users.map((user) => (
                    <Menu.Item
                        key={user.email}
                        onClick={() => console.log(user)}
                        style={{ opacity: 0.7, fontStyle: "italic" }}
                    >
                        <Icon name="circle" color={isUserOnline(user.email)} />@{" "}
                        {user.firstName} - {user.lastName}
                    </Menu.Item>
                ))}
            </Menu.Item>
        </Menu.Menu>
    );
}

export default DirectMessages;

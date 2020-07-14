import React from "react";
import { Menu, Icon } from "semantic-ui-react";

function DirectMessages(props) {
    if (typeof props.users === "undefined") {
        return <div></div>;
    }
    if (typeof props.presence === "undefined") {
        return <div></div>;
    }
    let statusArr = [];
    props.users.map((value) => {
        let id = value.id;
        props.status.child(id).on("value", (snap) => {
            if (snap.val() != null) statusArr.push(snap.val());
        });
    });

    console.log(statusArr);
    let obj = {};
    let isUserOnline = (email) => {
        statusArr.map((pre) => {
            if (pre.email === email) {
                obj = pre;
            }
        });

        if (obj.state) {
            return "green";
        } else {
            return "red";
        }
    };

    const onlineIcon = (user) => (
        <Menu.Item
            key={user.email}
            onClick={() => console.log(user)}
            style={{ opacity: 0.7, fontStyle: "italic" }}
        >
            <Icon name="circle" color={isUserOnline(user.email)} />@{" "}
            {user.firstName} - {user.lastName}
        </Menu.Item>
    );

    return (
        <Menu.Menu className="menu">
            <Menu.Item>
                <span>
                    <Icon name="mail" /> Direct Messages
                </span>
                {props.addOnline(props.currentUser, props.auth)}

                <Icon
                    name="add"
                    onClick={() =>
                        props.addOnline(props.currentUser, props.auth)
                    }
                />
                {props.users.map((user) => onlineIcon(user))}
            </Menu.Item>
        </Menu.Menu>
    );
}

export default DirectMessages;

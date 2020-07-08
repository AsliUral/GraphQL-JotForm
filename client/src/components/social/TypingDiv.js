import React from "react";
import Typing from "./Typing";

const TypingDiv = (props) => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            color: "black",
            marginBottom: "0.2em",
        }}
    >
        <span className="user__typing">{props.person.firstName} is typing</span>
        <Typing />
    </div>
);

export default TypingDiv;

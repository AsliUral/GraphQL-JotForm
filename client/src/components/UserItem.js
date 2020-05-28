import React, { useState } from "react";

const Submit = ({ setKey }) => {
    const [title, setTitle] = useState("");
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(title);
        setKey(title);
    };
    return (
        <form onSubmit={handelSubmit}>
            <label>Write ApiKey:</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="search" />
            <br></br>
        </form>
    );
};

export default Submit;

import React from "react";

import "./User.css";

const User = (props) => {
    return (
        <div>
            <h2>{props.username}</h2>
            <div className="">{props.age} years old.</div>
        </div>
    );
};

export default User;

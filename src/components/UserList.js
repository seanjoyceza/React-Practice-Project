import React from "react";

import User from "./User";

const UserList = (props) => {
    return (
        <div>
            {props.users.map((item) => {
                return (
                    <User
                        key={item.key}
                        username={item.username}
                        age={item.age}
                    />
                );
            })}
        </div>
    );
};

export default UserList;

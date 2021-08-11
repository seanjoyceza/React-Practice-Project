import React from "react";

import InputForm from "./components/InputForm";
import UserList from "./components/UserList";

const existingUsers = [
    {
        id: "u1",
        username: "Max",
        age: "31 years old",
    },
    {
        id: "u2",
        username: "Sean",
        age: "26 years old",
    },
];

function App() {
    return (
        <div>
            <InputForm />
            <UserList users={existingUsers} />
        </div>
    );
}

export default App;

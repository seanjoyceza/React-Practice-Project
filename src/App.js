import React, { useState } from "react";

import InputForm from "./components/InputForm";
import UserList from "./components/UserList";

const existingUsers = [
    {
        key: "u1",
        username: "Max",
        age: "31 years old",
    },
    {
        key: "u2",
        username: "Sean",
        age: "26 years old",
    },
];

function App() {
    const [allData, setAllData] = useState(existingUsers);
    // const [inputValidate, setInputValidate] = useState(true);
    const [ageValidate, setAgeValidate] = useState(true);

    const saveDataHandler = (newData) => {
        const enteredAge = newData.age;
        if (newData.age >= 0) {
            setAllData((prevData) => {
                return [newData, ...prevData];
            });
        } else {
            const enteredAge = newData.age;
            return enteredAge;
        }
    };

    return (
        <div>
            <InputForm onAddUserData={saveDataHandler} />
            <UserList users={allData} />
            {enteredAge >= 0 ? console.log("yes") : console.log("no")}
        </div>
    );
}

export default App;

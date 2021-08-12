import React, { useState } from "react";

import "./InputForm.css";
import Button from "./Button";

const InputForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const usernameAddHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageAddHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            key: "u" + Math.random().toString(),
            username: enteredUsername,
            age: enteredAge,
        };
        props.onAddUserData(userData);
        setEnteredUsername("");
        setEnteredAge("");
    };

    return (
        <form className="input" onSubmit={submitHandler}>
            <div className="">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    onChange={usernameAddHandler}
                    value={enteredUsername}
                ></input>
            </div>
            <div>
                <label htmlFor="age">Age (Years)</label>
                <input
                    type="number"
                    name="age"
                    onChange={ageAddHandler}
                    value={enteredAge}
                ></input>
            </div>
            <div>
                <Button />
            </div>
        </form>
    );
};

export default InputForm;

import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (
            enteredUsername.trim().length === 0 ||
            enteredAge.trim().length === 0
        ) {
            setError(true);
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)",
            });

            return;
        }
        if (+enteredAge < 1) {
            setError(true);
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)",
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const errorModalHandler = (event) => {
        setError();
    };

    return (
        <div>
            {error && (
                <ErrorModal
                    modalChangeHandler={errorModalHandler}
                    title={error.title}
                    message={error.message}
                />
            )}
            <Card className={classes.input}>
                <form className="input" onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={usernameChangeHandler}
                        value={enteredUsername}
                    ></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        onChange={ageChangeHandler}
                        value={enteredAge}
                    ></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;

import React from "react";

import "./InputForm.css";
import Button from "./Button";

const InputForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form className="input" onSubmit={submitHandler}>
            <div className="">
                <label htmlFor="username">Username</label>
                <input type="text" name="username"></input>
            </div>
            <div>
                <label htmlFor="age">Age (Years)</label>
                <input type="text" name="age"></input>
            </div>
            <div>
                <Button />
            </div>
        </form>
    );
};

export default InputForm;

"use client";

import { UserAuth } from "@/context/AuthContext";

import style from "../page.module.css";

const SignUp = () => {
    const { signUp } = UserAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        signUp(formProps.user, formProps.password);
    };
    return (
        <div>
            <h1>Sign Up</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="user">Username</label>
                <input id="user" name="user" type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="text" />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default SignUp;

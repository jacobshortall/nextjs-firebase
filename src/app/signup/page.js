"use client";

import { UserAuth } from "@/context/AuthContext";
import Link from "next/link";

import "../globals.css";

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

            <div className="form-container">
                <form className="form">
                    <label htmlFor="user">Username</label>
                    <input id="user" name="user" type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="text" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <Link href={"/login"}>...or log in</Link>
        </div>
    );
};

export default SignUp;

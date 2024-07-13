"use client";

import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";

const LogInForm = () => {
    const { user, userLoading, signIn, formSubmitted } = UserAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        signIn(formProps.user, formProps.password);
    };

    if (userLoading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    if (user) {
        return (
            <div>
                <span>You are already logged in.</span>
            </div>
        );
    }

    return (
        <div>
            <h1>Log In</h1>

            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="user">Username</label>
                    <input id="user" name="user" type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />

                    {formSubmitted ? (
                        <button type="submit">
                            <span className="loader"></span>
                        </button>
                    ) : (
                        <button type="submit">Log in</button>
                    )}
                </form>
            </div>
            <Link href={"/signup"}>...or sign up</Link>

            <span className="error"></span>
        </div>
    );
};

export default LogInForm;

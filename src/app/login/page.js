"use client";

import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import style from "../page.module.css";

const LogIn = () => {
    const { user, signIn } = UserAuth();
    console.log(user);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        signIn(formProps.user, formProps.password);
    };
    return (
        <div>
            <h1>Log In</h1>
            <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor="user">Username</label>
                <input id="user" name="user" type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="text" />
                <input type="submit" value="Log In" />
            </form>

            <Link href={"/signup"}>...or sign up</Link>
        </div>
    );
};

export default LogIn;

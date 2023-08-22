"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

import auth from "../firebase";
import style from "../page.module.css";

const LogIn = () => {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        signInWithEmailAndPassword(auth, formProps.user, formProps.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`${user.email} logged in`);

                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
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

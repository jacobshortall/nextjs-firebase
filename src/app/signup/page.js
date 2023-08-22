"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

import auth from "../firebase";
import style from "../page.module.css";

const SignUp = () => {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        createUserWithEmailAndPassword(auth, formProps.user, formProps.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
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

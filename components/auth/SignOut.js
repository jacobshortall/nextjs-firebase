"use client";

import { signOut } from "firebase/auth";
import auth from "@/app/firebase";

const SignOut = () => {
    const handleClick = (event) => {
        signOut(auth)
            .then(() => {
                console.log("signed out");
            })
            .catch((error) => {
                console.log(error, "fuck");
            });
    };

    return (
        <div>
            <button onClick={handleClick}>sign out</button>
        </div>
    );
};

export default SignOut;

"use client";

import { UserAuth } from "@/context/AuthContext";

const SignOut = () => {
    const { logOut } = UserAuth();

    const handleClick = (event) => {
        logOut();
    };

    return (
        <div>
            <button onClick={handleClick}>sign out</button>
        </div>
    );
};

export default SignOut;

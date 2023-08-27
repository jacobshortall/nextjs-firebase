"use client";

import { UserAuth } from "@/context/AuthContext";

const SignOut = () => {
    const { logOut } = UserAuth();

    const handleClick = (event) => {
        logOut();
    };

    return <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;

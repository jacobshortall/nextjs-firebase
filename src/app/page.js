"use client";

import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import auth from "./firebase";

import SignOut from "components/auth/SignOut";
import { useRouter } from "next/navigation";

export default function Home() {
    const [authenticated, setAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    // check auth here, then render LoggedInView component or LoggedOutView?

    // OR https://firebase.google.com/docs/auth/admin/manage-sessions

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuth(true);
            console.log("auth: true");
        } else {
            setAuth(false);
            console.log("auth: false");
        }
        setLoading(false);
    });

    let output;
    if (loading) {
        output = <h1>loading...</h1>;
    } else if (authenticated) {
        output = <SignOut />;
    } else {
        router.push("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            {output}
        </div>
    );
}

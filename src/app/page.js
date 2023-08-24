"use client";

import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import SignOut from "../../components/auth/SignOut";

export default function Home() {
    const router = useRouter();

    const { user } = UserAuth();

    let output;
    if (user) {
        output = (
            <div>
                <h5>{user.email} logged in</h5>
                <SignOut />
            </div>
        );
    } else {
        output = <h5>render logged out</h5>;
    }

    return (
        <div>
            <h1>Home</h1>
            {output}
        </div>
    );
}

"use client";

import { UserAuth } from "@/context/AuthContext";
import style from "./page.module.css";

export default function Home() {
    const { user, userLoading } = UserAuth();

    let output;
    if (userLoading) {
        output = <span className={style.loader}></span>;
    } else if (user) {
        output = (
            <div>
                <h5>{user.email} logged in</h5>
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

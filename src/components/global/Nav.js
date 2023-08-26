import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";

const Nav = () => {
    const { user } = UserAuth();

    let userOutput;
    if (user) {
        userOutput = (
            <div>
                <Link href={"profile"}>Profile</Link>
            </div>
        );
    } else {
        userOutput = (
            <nav className="header">
                <Link href={"login"}>Log In</Link>
                <br></br>
                <Link href={"signup"}>Sign Up</Link>
            </nav>
        );
    }

    return <div>{userOutput}</div>;
};

export default Nav;

import Link from "next/link";
import { UserAuth } from "@/context/AuthContext";
import SignOut from "../auth/SignOut";

const Nav = () => {
    const { user } = UserAuth();

    return (
        <header className="header">
            <Link className="home" href={"/"}>
                Home
            </Link>

            <nav className="menu">
                {user ? (
                    <div>
                        <Link href={"profile"}>Profile</Link>
                        <SignOut />
                    </div>
                ) : (
                    <div>
                        <Link href={"login"}>Log In</Link>
                        <Link href={"signup"}>Sign Up</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Nav;

import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <Link href={"/"}>Homepage</Link>
            <br></br>
            <Link href={"login"}>Log In</Link>
        </div>
    );
};

export default Nav;

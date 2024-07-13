'use client';

import Link from 'next/link';
import { UserAuth } from '@/context/AuthContext';
import SignOut from '../auth/SignOut';

const Nav = () => {
    const { user, userLoading } = UserAuth();

    return (
        <header className="header">
            <nav className="menu">
                {userLoading ? null : user ? (
                    <div>
                        <Link className="" href={'/'}>
                            Home
                        </Link>
                        <Link href={'profile'}>Profile</Link>
                        <SignOut />
                    </div>
                ) : (
                    <div className="nav-unauthed">
                        <Link className="" href={'/'}>
                            Home
                        </Link>
                        <Link href={'login'}>Log In</Link>
                        <Link href={'signup'}>Sign Up</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Nav;

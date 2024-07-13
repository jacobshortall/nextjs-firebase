'use client';

import { UserAuth } from '@/context/AuthContext';
import './globals.css';

const HomeContentWrapper = ({ children }) => {
    const { user, userLoading } = UserAuth();

    if (userLoading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    if (!user) {
        return (
            <div>
                <span>No user logged in.</span>
            </div>
        );
    }

    return (
        <div>
            <h1>Home</h1>

            <h5>{user.email} logged in</h5>
            {children}
        </div>
    );
};

export default HomeContentWrapper;

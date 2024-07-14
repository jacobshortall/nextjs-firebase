'use client';

import { UserAuth } from '@/context/AuthContext';

const LogInContentWrapper = ({ children }) => {
    const { user, userLoading } = UserAuth();

    if (userLoading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    if (user) {
        return (
            <div>
                <span>You are already logged in.</span>
            </div>
        );
    }

    return (
        <div>
            <h1>Log In</h1>

            {children}
        </div>
    );
};

export default LogInContentWrapper;

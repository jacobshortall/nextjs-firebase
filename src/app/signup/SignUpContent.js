'use client';

import { UserAuth } from '@/context/AuthContext';

const SignUpContentWrapper = ({ children }) => {
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
                <span>You already have an account.</span>
            </div>
        );
    }

    return (
        <div>
            <h1>Sign Up</h1>

            {children}
        </div>
    );
};

export default SignUpContentWrapper;

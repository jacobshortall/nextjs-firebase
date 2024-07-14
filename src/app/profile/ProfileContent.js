'use client';

import { UserAuth } from '@/context/AuthContext';

const ProfileContentWrapper = ({ children }) => {
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
                <span>You are not logged in. Log in to preview this page.</span>
            </div>
        );
    }

    return (
        <div>
            <h1>Profile</h1>

            {children}
        </div>
    );
};

export default ProfileContentWrapper;

'use client';

import { UserAuth } from '@/context/AuthContext';

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

    return <>{children}</>;
};

export default HomeContentWrapper;

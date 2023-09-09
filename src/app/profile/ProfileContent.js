"use client";

import { UserAuth } from "@/context/AuthContext";
import ProfileForm from "./ProfileForm";

const ProfileContent = () => {
    const { user, userLoading } = UserAuth();

    // maybe separate the profile data to a profileForm component?

    // useEffect(() => {
    //     if (!userLoading && user) {
    //         getProfileData();
    //     }
    // }, [userLoading]);

    if (userLoading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    if (!user) {
        return <span>You are not logged in. Log in to preview this page.</span>;
    }

    return (
        <div>
            <h1>Profile</h1>

            {/* {profileData.email} */}
            <ProfileForm />
        </div>
    );
};

export default ProfileContent;

"use client";

import { UserAuth } from "@/context/AuthContext";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const ProfileContent = () => {
    const { user, userLoading } = UserAuth();
    const [profileData, setProfileData] = useState();

    const getProfileData = async () => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const userData = docSnap.data();
            setProfileData(userData);
        } else {
            console.log("No such document!");
        }
    };

    // maybe separate the profile data to a profileForm component?

    useEffect(() => {
        if (!userLoading && user) {
            getProfileData();
        }
    }, [userLoading]);

    if (userLoading) {
        return <span className="loader"></span>
    }

    if (!user) {
        return <span>You are not logged in. Log in to preview this page.</span>
    }

    return (
        <div>
            <h1>Profile</h1>

            {profileData.email}
        </div>
    );
};

export default ProfileContent;

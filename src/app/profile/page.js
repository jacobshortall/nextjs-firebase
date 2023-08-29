"use client";

import { UserAuth } from "@/context/AuthContext";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

const Profile = () => {
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

    useEffect(() => {
        if (!userLoading) {
            getProfileData();
        }
        console.log(profileData);
    }, [userLoading]);

    return (
        <div>
            <h1>Profile</h1>

            {!profileData ? (
                <span className="loader"></span>
            ) : (
                profileData.email
            )}
        </div>
    );
};

export default Profile;

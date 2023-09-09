"use client";

import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";

const ProfileForm = () => {
    const [profileData, setProfileData] = useState();
    const { user } = UserAuth();

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
        getProfileData();
    });

    if (!profileData) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    return <div>{profileData.email}</div>;
};

export default ProfileForm;

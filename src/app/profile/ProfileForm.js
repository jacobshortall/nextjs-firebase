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
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfileData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    if (!profileData) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <div>
            <span>User created on {profileData.metadata.creationTime}</span>

            <form>
                <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                ></input>
            </form>

            <br />
            <span>{profileData.email}</span>
        </div>
    );
};

export default ProfileForm;

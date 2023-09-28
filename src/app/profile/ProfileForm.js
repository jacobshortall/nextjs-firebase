"use client";

import { db } from "../firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
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
            console.log("No such document.");
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

    const handleBlur = (event) => {
        const { name, value } = event.target;

        setProfileData((prevState) => ({
            ...prevState,
            [name]: value.trim()
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await setDoc(doc(db, "users", profileData.id), profileData, {merge: true});
        } catch (error) {
            console.log('Error:', error);
        }
    }

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

            <form onSubmit={handleSubmit} className="profile-form form">
                <label htmlFor="profile-name">Display Name</label>
                <input type="text" name="name" id="profile-name" value={profileData.name ? profileData.name : null} onBlur={handleBlur} onChange={handleChange}></input>
                <button type="submit" className="update-profile">Update</button>
            </form>

            <br />

        </div>
    );
};

export default ProfileForm;

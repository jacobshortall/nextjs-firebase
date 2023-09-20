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

    const handleClick = async (event) => {
        await setDoc(doc(db, "users", profileData.id), profileData, {merge: true});
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

            <form onSubmit={(event) => {event.preventDefault()}}>
                <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                ></input>
                <input type="text" name="name" value={profileData.name ? profileData.name : null} onChange={handleChange}></input>
            </form>

            <br />

            <button className="update-profile" onClick={handleClick}>Update</button>
        </div>
    );
};

export default ProfileForm;

'use client';

import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

const ProfileForm = ({ setProfileData, profileData }) => {
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
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await setDoc(doc(db, 'users', profileData.id), profileData, {
                merge: true
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <>
            <h2>Edit Profile</h2>

            <form onSubmit={handleSubmit} className="profile-form form">
                <label htmlFor="profile-name">Display Name</label>
                <input
                    type="text"
                    name="name"
                    id="profile-name"
                    value={profileData.name ? profileData.name : null}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>
                <button type="submit" className="update-profile">
                    Update
                </button>
            </form>

            <br />
        </>
    );
};

export default ProfileForm;

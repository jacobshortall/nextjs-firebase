'use client';

import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { showSuccess } from '@/functions/helper';

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

            showSuccess('Profile Updated');
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
                    value={profileData.name ? profileData.name : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>

                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={profileData.firstName ? profileData.firstName : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>

                <label htmlFor="last-name">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={profileData.lastName ? profileData.lastName : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>

                <button type="submit" className="update-profile">
                    Update
                </button>
            </form>

            <br />

            <span className="success">Profile Updated</span>
        </>
    );
};

export default ProfileForm;

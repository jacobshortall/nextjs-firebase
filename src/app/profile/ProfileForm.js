'use client';

import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useToast } from '@/context/ToastContext';

const ProfileForm = ({ setProfileData, profileData }) => {
    const { openToast } = useToast();

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

        const formFields = event.target.querySelectorAll('input');
        let emptyFields;

        for (const field of formFields) {
            if (!field.value) {
                emptyFields = true;
                const fieldLabel = document.querySelector(`[for=${field.id}]`);
                fieldLabel.classList.add('field-error');
            }
        }

        if (emptyFields) {
            openToast('error', 'Please fill in all required fields');
            return;
        } else {
            const fieldLabels = event.target.querySelectorAll('label');

            for (const label of fieldLabels) {
                label.classList.remove('field-error');
            }
        }

        try {
            await setDoc(doc(db, 'users', profileData.id), profileData, {
                merge: true
            });

            openToast('success', 'Profile Updated');
        } catch (error) {
            openToast('error', `${error}`);
        }
    };

    return (
        <>
            <h2>Edit Profile</h2>

            <form onSubmit={handleSubmit} className="profile-form form">
                <label htmlFor="profile-name">Display Name*</label>
                <input
                    type="text"
                    name="name"
                    id="profile-name"
                    value={profileData.name ? profileData.name : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>

                <label htmlFor="first-name">First Name*</label>
                <input
                    type="text"
                    name="firstName"
                    id="first-name"
                    value={profileData.firstName ? profileData.firstName : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>

                <label htmlFor="last-name">Last Name*</label>
                <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    value={profileData.lastName ? profileData.lastName : ''}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>

                <label htmlFor="job-role">Job Role*</label>
                <input
                    type="text"
                    name="jobRole"
                    id="job-role"
                    value={profileData.jobRole ? profileData.jobRole : ''}
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

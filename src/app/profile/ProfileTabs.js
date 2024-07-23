'use client';

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import ProfileInfo from './ProfileInfo';
import ProfileForm from './ProfileForm';
import { UserAuth } from '@/context/AuthContext';

const ProfileTabs = () => {
    const [profileTab, setProfileTab] = useState('details');
    const [profileData, setProfileData] = useState();
    const { user } = UserAuth();

    useEffect(() => {
        getProfileData();
    }, []);

    const getProfileData = async () => {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            setProfileData(userData);
        } else {
            console.log('No such document.');
        }
    };

    const handleClick = (event, option) => {
        setProfileTab(option);

        const currentlyToggled = document.querySelector('.toggled');
        if (currentlyToggled) {
            currentlyToggled.classList.remove('toggled');
        }

        event.target.classList.add('toggled');
    };

    if (!profileData) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    return (
        <>
            <div className="profile-tabs">
                <div
                    className="profile-tab toggled"
                    onClick={(event) => handleClick(event, 'details')}
                >
                    Profile Details
                </div>

                <div
                    className="profile-tab"
                    onClick={(event) => handleClick(event, 'customise')}
                >
                    Customise Profile
                </div>
            </div>

            {profileTab == 'details' ? (
                <ProfileInfo profileData={profileData} user={user} />
            ) : (
                <ProfileForm
                    setProfileData={setProfileData}
                    profileData={profileData}
                />
            )}
        </>
    );
};

export default ProfileTabs;

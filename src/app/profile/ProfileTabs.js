'use client';

import { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileForm from './ProfileForm';

const ProfileTabs = () => {
    const [profileTab, setProfileTab] = useState('details');

    const handleClick = (event, option) => {
        setProfileTab(option);

        const currentlyToggled = document.querySelector('.toggled');
        if (currentlyToggled) {
            currentlyToggled.classList.remove('toggled');
        }

        event.target.classList.add('toggled');
    };

    return (
        <div>
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

            {profileTab == 'details' ? <ProfileInfo /> : <ProfileForm />}
        </div>
    );
};

export default ProfileTabs;

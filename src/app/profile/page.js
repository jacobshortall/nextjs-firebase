import ProfileContentWrapper from './ProfileContent';
import ProfileTabs from './ProfileTabs';

const Profile = () => {
    console.log('profile server');

    return (
        <ProfileContentWrapper>
            <ProfileTabs />
        </ProfileContentWrapper>
    );
};

export default Profile;

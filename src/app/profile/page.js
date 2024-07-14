import ProfileContentWrapper from './ProfileContent';
import ProfileForm from './ProfileForm';

const Profile = () => {
    console.log('profile server');

    return (
        <ProfileContentWrapper>
            <ProfileForm />
        </ProfileContentWrapper>
    );
};

export default Profile;

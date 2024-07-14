const ProfileInfo = ({ profileData, user }) => {
    return (
        <>
            <h2>Profile Info</h2>

            <div className="profile-info">
                <span>User created: {profileData.metadata.creationTime}</span>
                <span>Last signed in: {user.metadata.lastSignInTime}</span>
            </div>
        </>
    );
};

export default ProfileInfo;

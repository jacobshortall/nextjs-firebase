const ProfileInfo = ({ profileData, user }) => {
    return (
        <div>
            <h2>Profile Info</h2>

            <div className="profile-info">
                <span>User created: {profileData.metadata.creationTime}</span>
                <span>Last signed in: {user.metadata.lastSignInTime}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;

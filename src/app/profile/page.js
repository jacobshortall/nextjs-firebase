import ProfileContent from "./ProfileContent";
import { AuthContextProvider } from "@/context/AuthContext";

const Profile = () => {
    console.log("profile server");

    return (
        <AuthContextProvider>
            <ProfileContent />
        </AuthContextProvider>
    );
};

export default Profile;

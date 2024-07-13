import { UserAuth } from '@/context/AuthContext';
import '@/app/globals.css';

const SignOut = () => {
    const { logOut } = UserAuth();

    const handleClick = (event) => {
        logOut();
    };

    return (
        <button className="sign-out" onClick={handleClick}>
            Sign Out
        </button>
    );
};

export default SignOut;

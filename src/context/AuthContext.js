import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import auth from "@/app/firebase";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const userStateChange = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => userStateChange();
    }, [user]);

    const signIn = (user, password) => {
        signInWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

                console.log(`${user.email} logged in`);

                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const signUp = (user, password) => {
        createUserWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                router.push("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("signed out");
                router.push("/");
            })
            .catch((error) => {
                console.log(error, "error signing out");
            });
    };

    return (
        <AuthContext.Provider value={{ user, logOut, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};

"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { addUser } from "@/functions/auth/addUser";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const userStateChange = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false);
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

    const signUp = async (user, password) => {
        setFormSubmitted(true);
        createUserWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userObject = {
                    id: user.uid,
                    email: user.email,
                    metadata: {
                        createdAt: user.metadata.createdAt,
                        creationTime: user.metadata.creationTime,
                        lastSignInTime: user.metadata.lastSignInTime
                    }
                };

                addUser(userObject);

                router.push("/");
            })
            .catch((error) => {
                setFormSubmitted(false);

                console.log("Error signing up: ", error.message);

                const errorMsgElement = document.querySelector(".error");
                if (errorMsgElement) {
                    errorMsgElement.style.display = "block";
                    errorMsgElement.innerHTML = error.message;

                    setTimeout(() => {
                        errorMsgElement.style.display = "none";
                    }, 2000);
                }
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
        <AuthContext.Provider
            value={{ user, userLoading, formSubmitted, logOut, signIn, signUp }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};

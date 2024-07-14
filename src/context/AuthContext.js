'use client';

import { useContext, createContext, useState, useEffect } from 'react';
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation';
import { addUser } from '@/functions/auth/addUser';
import { showError } from '@/functions/helper';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoading(false);
        });
    }, []);

    const signIn = (user, password) => {
        setFormSubmitted(true);
        signInWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                router.push('/');
                setFormSubmitted(false);
            })
            .catch((error) => {
                setFormSubmitted(false);

                console.log('Error signing in: ', error.message);
                showError(error.message);
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

                router.push('/');
                setFormSubmitted(false);
            })
            .catch((error) => {
                setFormSubmitted(false);

                console.log('Error signing up: ', error.message);
                showError(error.message);
            });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                router.push('/');
            })
            .catch((error) => {
                console.log(error, 'error signing out');
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

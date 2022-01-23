import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


//initializ firebase app
initializeFirebase();
const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoging] = useState(true);
    const [authError, setAuthError] = useState('');

    const registerUser = (email, password) => {
        setIsLoging(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // clear error
                setAuthError(' ');
            })
            .catch((error) => {
                //show error
                setAuthError(error.message);

            })
            .finally(() => setIsLoging(false));
    }

    const loginUser = (email, password) => {
        setIsLoging(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // clear error
                setAuthError(' ');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoging(false));

    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                setUser(user);
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoging(false);
        });
        return () => unsubscribe;
    }, [])

    const logout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoging(false));
    }

    return {
        user,
        isLoading,
        registerUser,
        loginUser,
        logout,

    }
};

export default useFirebase;
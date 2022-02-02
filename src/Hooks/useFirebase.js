import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Components/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


//initializ firebase app
initializeFirebase();
const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoging] = useState(true);
    const [authError, setAuthError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setIsLoging(true);
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // clear error
                setAuthError('');

                const newUser = {email, displayName: name};
                setUser(newUser);

           //send name to firebase after creation
            updateProfile(auth.currentUser, {
               displayName:name , photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
         
               }).catch((error) => {
             
                });


                history.replace('/');
            })
            .catch((error) => {
                //show error
                setAuthError(error.message);

            })
            .finally(() => setIsLoging(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoging(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // clear error
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoging(false));

    }

    const signInWithGoogle = (location, history) =>{
        setIsLoging(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
         setAuthError('');

        }).catch((error) => {
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
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,

    }
};

export default useFirebase;
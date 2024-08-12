import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const register = async (userData) => {
        return new Promise((resolve, reject) => {
            console.log(userData);
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
                .then((userCredential) => {
                    const user = userCredential?.user;
                    console.log(userCredential.user.uid)
                    setDoc(doc(db, "users",userCredential?.user?.uid), {
                        email: userData.email,
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                    }).then(() => {
                        setUser(user);
                        setLoading(false);
                        resolve({ success: 1 });
                    }).catch((error)=>{
                        reject(error);
                    })
                })
                .catch((error) => {
                    let msg = error.message;
                    console.log(msg);
                    if (error.message == "Firebase: Error (auth/email-already-in-use).")
                        msg = "Email already in Use";
                    if (error.message == "Firebase: Error (auth/invalid-email).")
                        msg = "Invalid Email";
                    if (
                        error.message ==
                        "Firebase: Password should be at least 6 characters (auth/weak-password)."
                    )
                        msg = "Password should be at least 6 characters";
                    reject(msg);
                });
        });
        // const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
        // console.log(response)
        // await setDoc(doc(db, "users", response?.user?.uid), {
        //     userId: response?.user?.uid,
        //     email: response?.user?.email,
        //     name: name
        // })
    }
    const login = async (userData) => {
        const email = userData.email;
        const password = userData.password;
        return new Promise((resolve, reject) => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential?.user;
                    console.log(user)
                    setUser(user);
                    setLoading(false);
                    resolve({ success: 1 });
                })
                .catch((error) => {
                    let msg = error.message;
                    console.log(msg);
                    if (error.message == "FirebaseError: Firebase: Error (auth/invalid-credential).")
                        msg = "Invalid Email";
                    if (error.message == "Firebase: Error (auth/invalid-email).")
                        msg = "Invalid Email";
                    if (
                        error.message ==
                        "Firebase: Error (auth/invalid-credential)."
                    )
                        msg = "Email or Password Incorrect";
                    if (
                        error.message ==
                        "Firebase: Error (auth/missing-password)."
                    )
                        msg = "Please Enter The Password ";
                    reject(msg);
                });
        });
    }
    const logout = async () => {
        new Promise((resolve, reject) => {
            signOut(auth)
                .then(() => {
                    setUser(null);
                    resolve({ success: 1 });
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
        })
    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return () => {
            unsub()
        }
    }, [])
    const authValue = {
        register,
        user,
        login,
        logout,
        loading,
        setLoading
    };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { addDoc, collection, getDocs, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'

export default function services() {
    const { user } = useContext(AuthContext)
    const createBoard = async (title, color) => {
        const colRef = collection(db, `users/${user.uid}/boards`);
        return new Promise((resolve, reject) => {
            if (title.length == 0) {
                reject("Enter the title")
            }
            if (color.length == 0) {
                reject("Select the color")
            }
            addDoc(colRef, {
                title: title,
                color: color,
                createdAt: serverTimestamp()
            }).then(() => {
                console.log("fsksh")
                resolve({ success: 1 })
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const fetchBoards = async () => {
        const colRef = collection(db, `users/${user.uid}/boards`);
        const q=query(colRef,orderBy("createdAt","desc"))
        const data=[]
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({...doc.data(),id:doc.id});
        });
        return data
    }
    return { createBoard, fetchBoards }
}

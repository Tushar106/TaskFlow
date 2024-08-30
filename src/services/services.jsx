import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
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
            }).then((d) => {

                // when not using emulators
                // const boardId = d.id;
                // const boardRef = doc(db, `users/${user.uid}/boardsData/${boardId}`)
                // setDoc(boardRef, {
                //     tabs: {
                //         todos: [],
                //         inProgress: [],
                //         completed: []
                //     },
                //     lastUpdated: serverTimestamp()
                // }).then(() => {
                //     resolve({ success: 1 })
                // })
                resolve({ success: 1 })
            }).catch((err) => {
                reject(err)
            })
        })
    }
    const fetchBoards = async () => {
        const colRef = collection(db, `users/${user.uid}/boards`);
        const q = query(colRef, orderBy("createdAt", "desc"))
        const data = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push({ ...doc.data(), id: doc.id });
        });
        return data
    }
    const fetchBoard = async (boardId) => {
        console.log(boardId)
        try {
            const boardRef = doc(db, `users/${user.uid}/boardsData/${boardId}`)
            const docSnap = await getDoc(boardRef);
            return docSnap.data();
        } catch (error) {
            return new Error(error)
        }

    }
    const deleteBoard=async(boardId)=>{
        try {
            const docRef = doc(db, 'users', user.uid,'boards',boardId);
            try {
              await deleteDoc(docRef)
              console.log("Entire Document has been deleted successfully.");
            } catch(ex) {
              console.log(ex); 
            }
        } catch (error) {
            return new Error(error)
        }
    }
    return { createBoard, fetchBoards, fetchBoard, deleteBoard }
}

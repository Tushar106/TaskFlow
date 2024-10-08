const { initializeApp } =require("firebase-admin/app");
const { FieldValue, getFirestore } =require("firebase-admin/firestore");
const { onDocumentCreated,onDocumentDeleted } =require("firebase-functions/v2/firestore");
initializeApp();

exports.createBoardData=onDocumentCreated('users/{uid}/boards/{boardId}',async event=>{
    const {uid,boardId}=event.params;
    const firestore=getFirestore();
    return await firestore.doc(`users/${uid}/boardsData/${boardId}`).set({
        tabs:{
            todos:[],
            inProgress:[],
            completed:[]
        },
        lastUpdated:FieldValue.serverTimestamp()
    })
})
exports.deleteBoardData=onDocumentDeleted('users/{uid}/boards/{boardId}',async event=>{
    const {uid,boardId}=event.params;
    const firestore=getFirestore();
    return await firestore.doc(`users/${uid}/boardsData/${boardId}`).delete()
})
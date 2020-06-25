import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDdY5Jlu_6fjAO62tRVh7U3O0uoKgLJHHI",
    authDomain: "graphql-jotform.firebaseapp.com",
    databaseURL: "https://graphql-jotform.firebaseio.com",
    projectId: "graphql-jotform",
    storageBucket: "graphql-jotform.appspot.com",
    messagingSenderId: "588200479696",
    appId: "1:588200479696:web:1765e49092b95d901247d5",
    measurementId: "G-QYWMBN2NZQ",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

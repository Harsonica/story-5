import firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyDcN86tVw5guBPbLU5L8SqrVMNSo2nDLHc",
    authDomain: "storyhub-e3b89.firebaseapp.com",
    projectId: "storyhub-e3b89",
    storageBucket: "storyhub-e3b89.appspot.com",
    messagingSenderId: "515964743735",
    appId: "1:515964743735:web:f974aecf0a13c0c5874fb2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
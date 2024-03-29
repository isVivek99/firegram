import firebase from 'firebase/app';
import 'firebase/storage';//store images
import 'firebase/firestore'; //database
import 'firebase/auth';//authentication

const firebaseConfig = {
    apiKey: "AIzaSyCXVl-p-YzLWy2foPW2WkNWr5l2Z8bKjgM",
    authDomain: "firegram-f3dac.firebaseapp.com",
    projectId: "firegram-f3dac",
    storageBucket: "firegram-f3dac.appspot.com",
    messagingSenderId: "625357454415",
    appId: "1:625357454415:web:50c9424fe22a496ec2fe3a"
  };
  firebase.initializeApp(firebaseConfig); 
 // firebaseConfig.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const auth = firebase.auth(); 

  export{ projectStorage, projectFirestore, timestamp, auth }
  
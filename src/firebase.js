import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4-e1qmtQdZR0X0Q7b8X-0CUoyBfckcFQ",
    authDomain: "mobacon-117e8.firebaseapp.com",
    databaseURL: "https://mobacon-117e8.firebaseio.com",
    projectId: "mobacon-117e8",
    storageBucket: "mobacon-117e8.appspot.com",
    messagingSenderId: "283582925998"
  };

firebase.initializeApp(config);

export default firebase;
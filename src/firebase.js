import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBCL6lf93HCxQub-4Ua9owxBRuQiGdexVU",
  authDomain: "fir-room-67989.firebaseapp.com",
  databaseURL: "https://fir-room-67989.firebaseio.com",
  projectId: "fir-room-67989",
  storageBucket: "fir-room-67989.appspot.com",
  messagingSenderId: "78203867173"
};

firebase.initializeApp(config);

export default firebase;
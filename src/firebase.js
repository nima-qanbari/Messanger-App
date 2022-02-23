import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyC5AmXrGx4TWB8i64jJIuXx_3c5q40njCA",
    authDomain: "rabbitgram-eaca6.firebaseapp.com",
    projectId: "rabbitgram-eaca6",
    storageBucket: "rabbitgram-eaca6.appspot.com",
    messagingSenderId: "163298460843",
    appId: "1:163298460843:web:317b99474b757adebfa3ee"
  }).auth();
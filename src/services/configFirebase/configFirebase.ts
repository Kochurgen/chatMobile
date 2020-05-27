import firebase from 'firebase';

let firebaseConfig = {
  apiKey: 'AIzaSyBWwIvXN_jVpuxV3vH0HRbGVL_qYoxQqOM',
  authDomain: 'chat-eaa02.firebaseapp.com',
  databaseURL: 'https://chat-eaa02.firebaseio.com',
  projectId: 'chat-eaa02',
  storageBucket: 'chat-eaa02.appspot.com',
  messagingSenderId: '921398351834',
  appId: '1:921398351834:web:8870230007e54920d212e3',
  measurementId: 'G-YSK03VJ6S7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const myStorage = firebase.storage();

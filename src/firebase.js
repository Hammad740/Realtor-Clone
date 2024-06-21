// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDH1ESUkiBNyJ8KFpbT4gEZNIbI6cP4ok0',
  authDomain: 'realtor-clone-project-88a15.firebaseapp.com',
  projectId: 'realtor-clone-project-88a15',
  storageBucket: 'realtor-clone-project-88a15.appspot.com',
  messagingSenderId: '694653735549',
  appId: '1:694653735549:web:475dfe5f69217ca4471714',
  measurementId: 'G-0J34MBWW01',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

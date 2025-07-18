import firebase from "firebase";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_PROJECTID,
  messagingSenderId: import.meta.env.VITE_PROJECTID,
  appId: import.meta.env.VITE_PROJECTID,
  measurementId: import.meta.env.VITE_PROJECTID,
};


if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

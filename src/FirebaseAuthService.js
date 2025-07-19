import firebase from "./FirebaseConfig";

const auth = firebase.auth();

const registerUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const logoutUser = () => {
  return auth.signOut();
};


const sentPasswordResetEmail = (email) => {
  return auth.sendPasswordResetEmail(email);
};

const loggingInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

const suscribeToAuthChanges = (handleAuthChange) => {
  auth.onAuthStateChanged((user) => {
    handleAuthChange(user);
  });
};


const FirebaseAuthService = {
  registerUser,
  loginUser,
  logoutUser,
  sentPasswordResetEmail,
  loggingInWithGoogle,
  suscribeToAuthChanges,
};

export default FirebaseAuthService;
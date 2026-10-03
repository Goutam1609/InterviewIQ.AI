import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-932fe.firebaseapp.com",
  projectId: "interviewiq-932fe",
  storageBucket: "interviewiq-932fe.firebasestorage.app",
  messagingSenderId: "514860610610",
  appId: "1:514860610610:web:8ac5616f4e86ef52ab382b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}
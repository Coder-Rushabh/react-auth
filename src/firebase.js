// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCgHf-w0Jgf6Yq-85dvJLqBr5ZZ86yHKJE",
  authDomain: "react-auth-7b57d.firebaseapp.com",
  projectId: "react-auth-7b57d",
  storageBucket: "react-auth-7b57d.appspot.com",
  messagingSenderId: "970260360575",
  appId: "1:970260360575:web:cac04d4df6f4371d9bfe4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
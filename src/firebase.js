import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByqH12zky1Gkuno5AfIcTXVYkkzyx6XvY",
  authDomain: "blog-1151b.firebaseapp.com",
  projectId: "blog-1151b",
  storageBucket: "blog-1151b.appspot.com",
  messagingSenderId: "120685167161",
  appId: "1:120685167161:web:c71342808747a06fc743e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
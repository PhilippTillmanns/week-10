import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUjUTa1VRuqDWXnjMweVAH_nd0HNwowzw",
  authDomain: "week-10-a9eb2.firebaseapp.com",
  projectId: "week-10-a9eb2",
  storageBucket: "week-10-a9eb2.appspot.com",
  messagingSenderId: "1047189548434",
  appId: "1:1047189548434:web:e31312fb15ecf8ce55254b",
  measurementId: "G-43PH0C3VMY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);


class User {
  constructor(username, personality){
    this.username = username;
    this.personality = personality;
  }
}

export const activeUser = new User("none", "none"); 
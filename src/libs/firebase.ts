import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8a2jtim2bXBi7icFWHmw5nJb492Bq6Fc",
  authDomain: "photouploaderapp-8ddc2.firebaseapp.com",
  projectId: "photouploaderapp-8ddc2",
  storageBucket: "photouploaderapp-8ddc2.appspot.com",
  messagingSenderId: "938800460185",
  appId: "1:938800460185:web:896ee3da31e4fed8e96308",
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);

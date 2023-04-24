
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBOT7PrRjlMikivGf25gvk6_uYasSKpYw",
  authDomain: "reminder-app-3fe94.firebaseapp.com",
  projectId: "reminder-app-3fe94",
  storageBucket: "reminder-app-3fe94.appspot.com",
  messagingSenderId: "344673313820",
  appId: "1:344673313820:web:9ebc7281a41038ed872bd9",
  databaseURL: "https://reminder-app-3fe94-default-rtdb.firebaseio.com"

};


export const app = initializeApp(firebaseConfig);
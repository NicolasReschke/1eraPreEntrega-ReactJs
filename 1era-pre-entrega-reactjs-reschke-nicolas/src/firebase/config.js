
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfC9sSPwr0f1jfS6GJ7ym56NUxGHSKjfQ",
    authDomain: "proyfinalreactjsreschkenicolas.firebaseapp.com",
    projectId: "proyfinalreactjsreschkenicolas",
    storageBucket: "proyfinalreactjsreschkenicolas.appspot.com",
    messagingSenderId: "926264830630",
    appId: "1:926264830630:web:b3eadda7e215c720a4a267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app
import App from './App.svelte';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABFGhRAzNCUbjxpkxj5Epd6kBgNtN_1tg",
    authDomain: "take-note-mini.firebaseapp.com",
    projectId: "take-note-mini",
    storageBucket: "take-note-mini.appspot.com",
    messagingSenderId: "814659144286",
    appId: "1:814659144286:web:20a530b15078a146d7c2cf",
    measurementId: "G-WWR83132D1"
};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig);
const analytics = getAnalytics(app1);

console.log(analytics)

const app = new App({
    target: document.body,
    props: {
        name: 'uchihaaaa'
    }
});

export default app;
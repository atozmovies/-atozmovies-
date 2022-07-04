import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCjBRnMXEIyrcwuhi_foskCTsZoV_xz_YY",
	authDomain: "atozmovies-b5167.firebaseapp.com",
	databaseURL: "https://atozmovies-b5167-default-rtdb.firebaseio.com",
	projectId: "atozmovies-b5167",
	storageBucket: "atozmovies-b5167.appspot.com",
	messagingSenderId: "421588567710",
	appId: "1:421588567710:web:802716361b48b2666e1d8f",
	measurementId: "G-J8G7KGSRR0"
};
const firebaseApp = firebase.initializeApp(config);

// Initialize the Firestore database
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebaseApp;

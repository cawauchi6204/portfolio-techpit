import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAyXh_sSlxDtMiOnEdvWukXZ-K-6ZkQo0s",
  authDomain: "cawauchi-portfolio.firebaseapp.com",
  databaseURL: "https://cawauchi-portfolio.firebaseio.com",
  projectId: "cawauchi-portfolio",
  storageBucket: "cawauchi-portfolio.appspot.com",
  messagingSenderId: "1048856634245",
  appId: "1:1048856634245:web:1cc3b704a80d5399bcdaec",
  measurementId: "G-0Y0ES11HY1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

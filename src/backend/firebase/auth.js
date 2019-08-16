import firebase from "firebase";
import firestore from "firebase/firestore";
//import { saveData } from "./utility";
import AsyncStorage from "@react-native-community/async-storage";

export async function connectFirebase() {
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyCP2IP-S6q-BZE35Grfhai-xylDyGbbGDQ",
    authDomain: "artsfuel-1565196656405.firebaseapp.com",
    databaseURL: "https://artsfuel-1565196656405.firebaseio.com",
    projectId: "artsfuel-1565196656405",
    storageBucket: "",
    messagingSenderId: "220569002226",
    appId: "1:220569002226:web:ab959858a8840577"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export async function signUp(email, password, userType, userName, phone) {
    let success = true;

  await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      AsyncStorage.setItem('name',userName)
    })
    .catch(function(error) {
      alert(error.code + ": " + error.message);
      success=false;
    });
    return success;
}

export async function signIn(email, password) {
  let success = true;
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      AsyncStorage.setItem("id", user.user.uid);
    })
    .catch(function(error) {
      success = false;
      alert(error.code + ": " + error.message);
    });

  return success;
}

export async function getCurrentUserId() {
  var user = firebase.auth().currentUser;

  if (user != null) {
    return user.uid;
  }
}
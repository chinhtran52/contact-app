import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyApi8DFk2e8SUSwZmeO0n-4Pulntw61HE4",
    authDomain: "contact-app-7a0dc.firebaseapp.com",
    databaseURL: "https://contact-app-7a0dc.firebaseio.com",
    projectId: "contact-app-7a0dc",
    storageBucket: "",
    messagingSenderId: "254680543021",
    appId: "1:254680543021:web:894466da74f990e4f42da4",
    measurementId: "G-ZP6FZH1TGF"
  };

export const firebaseApp = firebase.initializeApp(config);
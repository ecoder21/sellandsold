import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import 'firebase/compat/database'; 
const firebaseConfig = {
  apiKey: "AIzaSyCAEZF8JLgclnuC_Mv9vNjcUbiyTCojMbE",
  authDomain: "sell-and-sold-88325.firebaseapp.com",
databaseURL: "https://sell-and-sold-88325-default-rtdb.firebaseio.com",
projectId: "sell-and-sold-88325",
storageBucket: "sell-and-sold-88325.appspot.com",
messagingSenderId: "415495814947",
appId: "1:415495814947:web:eea2d85010326345a01696",
measurementId: "G-R56ENNV8NV",
};

export const Firebase= firebase.initializeApp(firebaseConfig)//named export    
 export const database = firebase.database();
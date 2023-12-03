import React from 'react'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBx6IEF2-tJEHEev_k6D3apFh484Tea1bw",
    authDomain: "storage-app-61607.firebaseapp.com",
    projectId: "storage-app-61607",
    storageBucket: "storage-app-61607.appspot.com",
    messagingSenderId: "515018527777",
    appId: "1:515018527777:web:43480293e836b85107ff60"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()
  
  
  
  export { auth, provider, db, storage }
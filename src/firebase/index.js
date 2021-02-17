import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBP1gwyvnKXy4jm7GUO66fE4WEeR2JWsWc",
  authDomain: "todo-app-9abd8.firebaseapp.com",
  databaseURL: "https://todo-app-9abd8.firebaseio.com",
  projectId: "todo-app-9abd8",
  storageBucket: "todo-app-9abd8.appspot.com",
  messagingSenderId: "183175256342",
  appId: "1:183175256342:web:75e6d2207a1c45f400d837",
  measurementId: "G-VY3E0R82W7"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebaseApp.storage()
const twitterProvider = firebase.auth.TwitterAuthProvider()

export {
  firebaseApp,
  db,
  auth,
  twitterProvider,
  storage
}
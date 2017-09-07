import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyAmBav0PoR0iMoPGP-XFMtaZmg82TZhnXY",
  authDomain: "chat-react-redux.firebaseapp.com",
  databaseURL: "https://chat-react-redux.firebaseio.com",
  projectId: "chat-react-redux",
  storageBucket: "chat-react-redux.appspot.com",
  messagingSenderId: "63936828345"
}

firebase.initializeApp(config)

export default firebase

export const { auth, database } = firebase

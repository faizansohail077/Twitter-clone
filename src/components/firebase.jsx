import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCiFtjm-nmrLfhLAqE4QVdTvQanzzOuqqI",
    authDomain: "twitter-clone-9baa9.firebaseapp.com",
    databaseURL: "https://twitter-clone-9baa9.firebaseio.com",
    projectId: "twitter-clone-9baa9",
    storageBucket: "twitter-clone-9baa9.appspot.com",
    messagingSenderId: "475649157308",
    appId: "1:475649157308:web:1b7057436aa05ca68c48b9",
    measurementId: "G-253JP0M7LH"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig)

  const db=firebaseApp.firestore()

  export default db;
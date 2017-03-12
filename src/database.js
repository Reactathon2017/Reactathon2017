import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCzim4daoJ_9q9Hld6nz4Evhh6WAJO9Hb4",
    authDomain: "reactathon2017.firebaseapp.com",
    databaseURL: "https://reactathon2017.firebaseio.com",
    storageBucket: "reactathon2017.appspot.com",
    messagingSenderId: "335842036245"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
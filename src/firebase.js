import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAbjV0Wlyq1JKbr7S1C8chiV8u2rmHAheo",
  authDomain: "firedux-todo-1230c.firebaseapp.com",
  databaseURL: "https://firedux-todo-1230c.firebaseio.com",
  projectId: "firedux-todo-1230c",
  storageBucket: "firedux-todo-1230c.appspot.com",
  messagingSenderId: "8261358458",
  appId: "1:8261358458:web:30ba54b3297cf7e526bcc3"
  }
  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos")
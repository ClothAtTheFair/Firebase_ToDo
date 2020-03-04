import * as firebase from 'firebase';

var config = {
    apiKey: apikey,
    authDomain: authdomain,
    databaseURL: databaseurl,
    projectId: projectid,
    storageBucket: storagebucket,
    messagingSenderId: messagingsenderid,
    appId: appid
  }
  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos")
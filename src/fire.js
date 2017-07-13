import firebase from 'firebase';
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4u_yrZkvYPZuFy0fghh4FsVj5irg6rAg",
    authDomain: "student-grade-table-8f8ad.firebaseapp.com",
    databaseURL: "https://student-grade-table-8f8ad.firebaseio.com",
    projectId: "student-grade-table-8f8ad",
    storageBucket: "",
    messagingSenderId: "205216384485"
  };
  var fire = firebase.initializeApp(config);
export default fire;
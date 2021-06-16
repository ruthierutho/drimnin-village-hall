import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAeZ9BqJCFQv7987ieK_7ND58MfQkeFgVI",
    authDomain: "drimnin-village-hall.firebaseapp.com",
    projectId: "drimnin-village-hall",
    storageBucket: "drimnin-village-hall.appspot.com",
    messagingSenderId: "461618412520",
    appId: "1:461618412520:web:807aa313b0c3bc0e15425d",
    measurementId: "G-7VN4BFTKQ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
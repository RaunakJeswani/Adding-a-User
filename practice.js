 var firebaseConfig = {
     apiKey: "AIzaSyCDNtnudrxnZtIzL0audrNczEqR8v7eCYw",
     authDomain: "kwitter-b1d73.firebaseapp.com",
     databaseURL: "https://kwitter-b1d73-default-rtdb.firebaseio.com",
     projectId: "kwitter-b1d73",
     storageBucket: "kwitter-b1d73.appspot.com",
     messagingSenderId: "419282640759",
     appId: "1:419282640759:web:8662d21cb9cef73de30b72"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 function addUser() {
     user_name = document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({
         purpose: "adding user"
     });
 }

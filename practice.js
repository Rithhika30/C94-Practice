var firebaseConfig = {
    apiKey: "AIzaSyDrAVmBckswsyneaeGOw-9iYKz2sLvlS0k",
    authDomain: "kwitter-16c00.firebaseapp.com",
    databaseURL: "https://kwitter-16c00-default-rtdb.firebaseio.com",
    projectId: "kwitter-16c00",
    storageBucket: "kwitter-16c00.appspot.com",
    messagingSenderId: "756217901464",
    appId: "1:756217901464:web:857b3e032febf6710c7bed"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
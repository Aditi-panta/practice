var firebaseConfig = {
    apiKey: "AIzaSyCltcAsUVJn4Op3c_LIVuZmlEBG4SJfw38",
    authDomain: "practice-8402c.firebaseapp.com",
    databaseURL: "https://practice-8402c-default-rtdb.firebaseio.com",
    projectId: "practice-8402c",
    storageBucket: "practice-8402c.appspot.com",
    messagingSenderId: "925860713461",
    appId: "1:925860713461:web:adeab4a7faee6c622006bc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
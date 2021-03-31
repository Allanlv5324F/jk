var firebaseConfig = {
  apiKey: "AIzaSyBUIklFohTsyFQdf55ZGX7YZ5MxRw0FqEc",
  authDomain: "baby-21d7f.firebaseapp.com",
  databaseURL: "https://baby-21d7f-default-rtdb.firebaseio.com",
  projectId: "baby-21d7f",
  storageBucket: "baby-21d7f.appspot.com",
  messagingSenderId: "842298230182",
  appId: "1:842298230182:web:f789ea98ace097b56c3b67",
  measurementId: "G-SBLJDZXB7T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();

function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chat_page.html";
}
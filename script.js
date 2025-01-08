import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9lx2uross7Pe_Qm4q8aR0I6JaHE4VKK0",
    authDomain: "inventor-30aea.firebaseapp.com",
    databaseURL: "https://inventor-30aea-default-rtdb.firebaseio.com",
    projectId: "inventor-30aea",
    storageBucket: "inventor-30aea.firebasestorage.app",
    messagingSenderId: "682658829610",
    appId: "1:682658829610:web:d61e8beadeff74583cfa53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
//get ref to database services

const db = getDatabase(app);
document.getElementById("submit").addEventListener('click', function (e) {
    set(ref(db, 'user/' + document.getElementById("username").value),
        {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            Phonenumber: document.getElementById("Phonenumber").value
        })
    alert("Login Successfull !")
})
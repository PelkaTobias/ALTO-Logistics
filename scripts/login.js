
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6XsQmF0tgiP--SwRsN4Fhoyrv1c6ZUkE",
    authDomain: "alto-logistics-alto.firebaseapp.com",
    databaseURL: "https://alto-logistics-alto-default-rtdb.firebaseio.com",
    projectId: "alto-logistics-alto",
    storageBucket: "alto-logistics-alto.appspot.com",
    messagingSenderId: "882170958574",
    appId: "1:882170958574:web:1dbd10b23dd601202819ff",
    measurementId: "G-ZCSRPLEQKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");
submit.addEventListener("click", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Benutzername = document.getElementById("username").value;
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Erfolgreich registriert
        const user = userCredential.user;
        alert("Erfolgreich registriert!");
        window.location.href = "eingeloggt.html"
        // Weitere Aktionen nach der erfolgreichen Registrierung
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
});

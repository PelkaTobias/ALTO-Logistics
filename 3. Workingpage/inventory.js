// Import the functions you need from the SDKs you need
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Your web app's Firebase configuration
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

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Realtime Database initialisieren

// Daten aus Firebase abrufen und anzeigen
const productList = document.getElementById("productList");

// Referenz auf die Produkte
const productsRef = ref(database, 'products');

// Event-Listener für Änderungen an der Datenbank
onValue(productsRef, (snapshot) => {
    // Produkte aus der Datenbank erhalten
    const products = snapshot.val();
    console.log("Produkte aus Firebase abgerufen:", products); // Debugging-Ausgabe

    // Container leeren
    productList.innerHTML = "";

    // Produkte durchlaufen und anzeigen
    for (const key in products) {
        const product = products[key];
        console.log("Aktuelles Produkt:", product); // Debugging-Ausgabe

        

        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.productName}</h3>
            <p>Länge: ${product.length}</p>
            <p>Breite: ${product.width}</p>
            <p>Höhe: ${product.height}</p>
            <p>Gewicht: ${product.weight}</p>
        `;
        
        productList.appendChild(productDiv);
    }
});

function displayEditForm(key, product) {
    // Hier können Sie ein Modalfenster oder ein anderes Anzeigeelement verwenden, um das Bearbeitungsformular darzustellen
    // Füllen Sie das Formular mit den vorhandenen Produktinformationen aus und ermöglichen Sie dem Benutzer, die Details zu bearbeiten und zu aktualisieren
    
    // Beispiel: Öffnen eines Modalfensters
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // Fügen Sie hier den Inhalt des Bearbeitungsformulars hinzu, basierend auf dem Produkt und dem Schlüssel
    
    // Beispiel: Schließen des Modalfensters
    const closeButton = document.createElement("button");
    closeButton.innerText = "Schließen";
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.appendChild(closeButton);
    document.body.appendChild(modal);
}

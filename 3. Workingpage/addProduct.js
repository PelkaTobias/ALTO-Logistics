
        // Import the functions you need from the SDKs you need
        
        import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
        import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

    
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
        const database = getDatabase(app); // Initialize Realtime Database
    
        const submit = document.getElementById("submit");
        submit.addEventListener("click", function(event) {
        event.preventDefault();

        // Überprüfe, ob alle Felder ausgefüllt sind
        const productName = document.getElementById("productName").value;
        const length = document.getElementById("length").value;
        const width = document.getElementById("width").value;
        const height = document.getElementById("height").value;
        const weight = document.getElementById("weight").value;

        if (!productName || !length || !width || !height || !weight) {
            return; // Verhindert das Absenden des Formulars
        }

        // Alle Felder sind ausgefüllt, fahre mit der Erstellung des Produkts fort
        createNewProduct(productName, length, width, height, weight)
            .then(() => {
                alert("Das Produkt wurde erfolgreich gespeichert!");
            })
            .catch((error) => {
                console.error("Fehler beim Speichern des Produkts: ", error);
                alert("Fehler beim Speichern des Produkts.");
        });
});

    
        function createNewProduct(productName, length, width, height, weight) {
    return new Promise((resolve, reject) => {
        const productsRef = ref(database, 'products'); // Verweis auf die Liste der Produkte
        const newProductRef = push(productsRef); // Neues Produkt in die Liste einfügen und Referenz erhalten
        set(newProductRef, {
            productName: productName,
            length: length,
            width: width,
            height: height,
            weight: weight
        })
        .then(() => {
            resolve();
        })
        .catch((error) => {
            console.error("Fehler beim Speichern des Produkts: ", error); // Zusätzliche Fehlerausgabe
            reject(error);
        });
    });
}
// Finde alle Eingabefelder im Formular außer dem Gewichtsfeld und dem Produktname-Feld
const inputFields = document.querySelectorAll('input[type="text"]:not(#weight):not(#productName)');

// Finde das Gewichtsfeld und das Produktname-Feld
const weightField = document.getElementById('weight');
const productNameField = document.getElementById('productName');

// Füge einen Event-Listener für das blur-Ereignis hinzu
inputFields.forEach((inputField) => {
    inputField.addEventListener('blur', (event) => {
        const value = event.target.value;
        // Überprüfe, ob das Feld einen Wert hat und nicht bereits "cm" enthält
        if (value && !value.endsWith("cm") && event.target !== productNameField) {
            // Füge "cm" am Ende des Werts hinzu, außer für das Produktname-Feld
            event.target.value = value + "cm";
        }
    });

    // Füge einen Event-Listener für das keydown-Ereignis hinzu, um zum nächsten Eingabefeld zu springen, wenn die Eingabetaste gedrückt wird
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const index = Array.from(inputFields).indexOf(event.target);
            if (index < inputFields.length - 1) {
                inputFields[index + 1].focus();
            } else {
                weightField.focus(); // Springe zum Gewichtsfeld, wenn alle anderen Felder ausgefüllt sind
            }
            event.preventDefault(); // Verhindere das Standardverhalten der Eingabetaste
        } else if (event.key === 'ArrowUp') {
            const index = Array.from(inputFields).indexOf(event.target);
            if (index > 0) {
                inputFields[index - 1].focus();
            } else {
                weightField.focus(); // Springe zum Gewichtsfeld, wenn das erste Feld erreicht ist
            }
            event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach oben
        } else if (event.key === 'ArrowDown') {
            const index = Array.from(inputFields).indexOf(event.target);
            if (index < inputFields.length - 1) {
                inputFields[index + 1].focus();
            } else {
                weightField.focus(); // Springe zum Gewichtsfeld, wenn das letzte Feld erreicht ist
            }
            event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach unten
        }
    });
});

// Füge einen Event-Listener für das focus-Ereignis zum Gewichtsfeld hinzu, um das Feld zu leeren und "kg" hinzuzufügen, wenn es erneut ausgewählt wird
weightField.addEventListener('focus', (event) => {
    const value = event.target.value;

    if (value && !value.endsWith("kg")) {
        // Füge "kg" am Ende des Werts hinzu, wenn es nicht bereits vorhanden ist
        event.target.value = value + "kg";
    }
});

// Füge einen Event-Listener für das keydown-Ereignis zum Gewichtsfeld hinzu
weightField.addEventListener('keydown', (event) => {
    if (event.key === 'arrowdown') {
        inputFields[inputFields.length - 1].focus(); // Springe zum letzten Eingabefeld
        event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach oben
    }
});

// Füge einen Event-Listener für das blur-Ereignis hinzu
inputFields.forEach((inputField) => {
    inputField.addEventListener('blur', (event) => {
        const value = event.target.value;
        // Überprüfe, ob das Feld einen Wert hat und nicht bereits "cm" enthält
        if (value && !value.endsWith("cm")) {
            // Füge "cm" am Ende des Werts hinzu
            event.target.value = value + "cm";
        }
    });

    // Füge einen Event-Listener für das keydown-Ereignis hinzu, um zum nächsten Eingabefeld zu springen, wenn die Eingabetaste gedrückt wird
    inputField.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const index = Array.from(inputFields).indexOf(event.target);
            if (index < inputFields.length - 0) {
                inputFields[index + 1].focus();
            } else {
                weightField.focus(); // Springe zum Gewichtsfeld, wenn alle anderen Felder ausgefüllt sind
            }
            event.preventDefault(); // Verhindere das Standardverhalten der Eingabetaste
        } else if (event.key === 'ArrowUp') {
            const index = Array.from(inputFields).indexOf(event.target);
            if (index > 0) {
                inputFields[index - 1].focus();
            } else {
                weightField.focus(); // Springe zum Gewichtsfeld, wenn das erste Feld erreicht ist
            }
            event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach oben
        } else if (event.key === 'ArrowDown') {
            const index = Array.from(inputFields).indexOf(event.target);
            if (index < inputFields.length - 1) {
                inputFields[index + 1].focus();
            } else {
                weightField.focus(); // Springe zum Gewichtsfeld, wenn das letzte Feld erreicht ist
            }
            event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach unten
        }
    });
});

// Füge einen Event-Listener für das keydown-Ereignis zum Gewichtsfeld hinzu
weightField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Füge "kg" zum Wert des Gewichtsfelds hinzu
        const value = event.target.value.trim(); // Entferne führende und abschließende Leerzeichen
        if (value && !value.endsWith("kg")) {
            // Füge "kg" am Ende des Werts hinzu, wenn es nicht bereits vorhanden ist
            event.target.value = value + " kg";
        }
        event.preventDefault(); // Verhindere das Standardverhalten der Eingabetaste
    } else if (event.key === 'ArrowDown') {
        // Springe zum nächsten Eingabefeld, wenn die Pfeiltaste nach unten gedrückt wird
        const index = Array.from(inputFields).indexOf(weightField);
        if (index < inputFields.length - 1) {
            inputFields[index + 1].focus();
        }
        event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach unten
    }
});

weightField.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        // Springe zum nächsten Eingabefeld, wenn die Pfeiltaste nach unten gedrückt wird
        const index = Array.from(inputFields).indexOf(weightField);
        if (index < inputFields.length - 0) {
            inputFields[index + 0].focus();
        }
        event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach unten
    } else if (event.key === 'ArrowUp') {
        // Springe zum vorherigen Eingabefeld, wenn die Pfeiltaste nach oben gedrückt wird
        const index = Array.from(inputFields).indexOf(weightField);
        if (index > 0) {
            inputFields[index - 0].focus();
        } else {
            inputFields[inputFields.length - 0].focus(); // Wenn das erste Feld erreicht ist, springe zum letzten
        }
        event.preventDefault(); // Verhindere das Standardverhalten der Pfeiltaste nach oben
    }
});

function validateInput(input) {
    input.value = input.value.replace(/[^0-9.,]/g, ''); // Nur Zahlen, Komma und Punkt erlauben
}

// Füge einen Event-Listener für das keydown-Ereignis im Namensfeld hinzu
productNameField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Verhindere das Standardverhalten der Eingabetaste
        event.preventDefault(); 
        // Fokussiere das nächste Eingabefeld (das zweite Feld)
        inputFields[0].focus();
    }
});



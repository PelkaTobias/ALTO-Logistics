import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

// Initialize the default Firebase app
admin.initializeApp();

export const sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  // Don't send an email if it's an anonymous user
  if (!user.providerData || user.providerData.length == 0) return;

  firestore()
    .collection("mail")
    .add({
      to: user.email,
      message: {
        subject: "Welcome!",
        html: `
          Hey ${user.displayName || ""}! 👋

          Thank you for signing up.
        `,
      },
    });
});
// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  // Hole eine Referenz auf den Senden-Button
  var sendButton = document.getElementById("sendButton");

  // Füge einen Event-Listener hinzu, um auf Klicks des Senden-Buttons zu reagieren
  sendButton.addEventListener("click", function() {
      // Hole den Text der eingegebenen Nachricht aus dem Textfeld
      var messageInput = document.getElementById("messageInput");
      var message = messageInput.value.trim();

      // Überprüfe, ob die Nachricht nicht leer ist
      if (message !== "") {
          // Hier fügst du den Code ein, um die Nachricht zu senden, z.B. mit Firebase Realtime Database

          // Nach dem Senden leere das Textfeld
          messageInput.value = "";
      } else {
          // Wenn die Nachricht leer ist, gib eine Benachrichtigung aus oder handle sie auf andere Weise
          alert("Bitte geben Sie eine Nachricht ein.");
      }
  });
});
// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
  // Authentifizierungszustand überprüfen
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
          // Benutzer ist angemeldet
          var userId = user.uid;
          console.log("Benutzer mit ID " + userId + " ist angemeldet.");
          // Hier kannst du weitere Aktionen für angemeldete Benutzer ausführen
      } else {
          // Kein Benutzer angemeldet
          console.log("Kein Benutzer angemeldet.");
          // Hier kannst du Aktionen für nicht angemeldete Benutzer ausführen
      }
  });
});

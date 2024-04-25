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
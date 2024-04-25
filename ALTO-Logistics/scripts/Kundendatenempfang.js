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
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  
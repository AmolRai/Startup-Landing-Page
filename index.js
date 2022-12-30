const firebaseConfig = {
  apiKey: "AIzaSyDh_O7dRNk0lG47Uux1rSHjtC3QoeRMQ1U",
  authDomain: "startup-landing-page-c1532.firebaseapp.com",
  databaseURL: "https://startup-landing-page-c1532-default-rtdb.firebaseio.com",
  projectId: "startup-landing-page-c1532",
  storageBucket: "startup-landing-page-c1532.appspot.com",
  messagingSenderId: "994864680594",
  appId: "1:994864680594:web:3e9dd888ba36bfb2dee04b"
};


// Initialize firebase
firebase.initializeApp(firebaseConfig);

const myForm = document.getElementById("contact-form");

var contactFormDB = firebase.database().ref("contact-form");

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(ev) {
  ev.preventDefault();
  var email = document.getElementById("email-id").value;

  contactFormDB.push().set({
    email: email
  });

  document.getElementById("email-id").value = "";
}

const firebaseConfig = {
  apiKey: "AIzaSyCV-5O6sezilOOWUIFA_I7EV0AYUcoDjcA",
  authDomain: "wt-travel-info-website.firebaseapp.com",
  databaseURL: "https://wt-travel-info-website-default-rtdb.firebaseio.com",
  projectId: "wt-travel-info-website",
  storageBucket: "wt-travel-info-website.appspot.com",
  messagingSenderId: "400106498466",
  appId: "1:400106498466:web:c0fba06013667f8c11eafb",
  measurementId: "G-3FWPVBE8JW",
};

// initialise firebase

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const feedbackFormDB = firebase.database().ref("FeedbackForm");

// get feedback form from html file
document.getElementById("FeedbackForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // get values from feedback form
  const Firstname = getInputVal("firstname");
  const LastName = getInputVal("lastname");
  const Review = getInputVal("review");
  const Destination = getInputVal("destination");
  const Interest = getInputVal("interest");

  // console.log(Firstname, LastName, Review, Destination, Interest); - this shows us in console(Inspect-website) that our values are fetching from our form !

  // calling the save function which we wrote below with inserting values we got from above in the parenthesis
  saveFeedback(Firstname, LastName, Review, Destination, Interest);

  // enable the alert message
  document.querySelector(".alert").style.display = "block";

  // hide alert message after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // clear/reset form
  document.getElementById("FeedbackForm").reset();
}

// function to save values to firebase - need to call this function in above submitForm
const saveFeedback = (Firstname, LastName, Review, Destination, Interest) => {
  const newFeedback = feedbackFormDB.push();

  newFeedback.set({
    Firstname: Firstname,
    LastName: LastName,
    Review: Review,
    Destination: Destination,
    Interest: Interest,
  });
};

const getInputVal = (id) => {
  return document.getElementById(id).value;
};

//From here to "❌" sign , all are the attempts to connect my form to  FIRESTORE !

// // Get a reference to the Firestore database
// const db = firebase.firestore();

// // Add the feedback to the "Feedback" collection
// db.collection("Feedback")
//   .add(feedback)
//   .then(() => {
//     console.log("Feedback added successfully!");
//     document.getElementById("FeedbackForm").reset();
//   })
//   .catch((error) => {
//     console.error("Error adding feedback: ", error);
//   });

// // saving data to firestore
// const saveFeedbackForm = (Firstname, LastName, Review, Destination, Interest) => {
//     db.collection("FeedbackForm").add({
//         Firstname: Firstname,
//         LastName: LastName,
//         Review: Review,
//         Destination: Destination,
//         Interest: Interest
//     })
//     .then(() => {
//         console.log("Feedback saved");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// }

// // storing form data to firestore
// const db = firebase.firestore();

// // saving data to firestore
// const saveFeedbackForm = (Firstname, LastName, Review, Destination, Interest) => {
//     db.collection("FeedbackForm").add({
//         Firstname: Firstname,
//         LastName: LastName,
//         Review: Review,
//         Destination: Destination,
//         Interest: Interest
//     })
//     .then(() => {
//         console.log("Feedback saved");
//     })
//     .catch((error) => {
//         console.log(error);
//     });
//     }

// ❌

//👇 Below is the Simple plain code to connect our html form to firebase database !

// const firebaseConfig = {
//     apiKey: "AIzaSyCV-5O6sezilOOWUIFA_I7EV0AYUcoDjcA",
//     authDomain: "wt-travel-info-website.firebaseapp.com",
//     projectId: "wt-travel-info-website",
//     storageBucket: "wt-travel-info-website.appspot.com",
//     messagingSenderId: "400106498466",
//     appId: "1:400106498466:web:c0fba06013667f8c11eafb",
//     measurementId: "G-3FWPVBE8JW"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   // Get a reference to the Firestore database service
//   const db = firebase.firestore();

//   // Handle form submission
//   document.getElementById("FeedbackForm").addEventListener("submit", submitForm);

//   function submitForm(e) {
//     e.preventDefault();

//     // Get form field values
//     const firstname = getInputVal("firstname");
//     const lastname = getInputVal("lastname");
//     const review = getInputVal("review");
//     const destination = getInputVal("destination");
//     const interest = getInputVal("interest");

//     // Save form data to Firestore
//     const formData = {
//       firstname,
//       lastname,
//       review,
//       destination,
//       interest
//     };
// }
//     db.collection("FeedbackForm").add(formData)
//       .then(() => {
//         console.log("Form data successfully stored in Firestore!");
//         })

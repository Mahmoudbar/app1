
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-wCKZw08CZeXBsHPLQlM_WylX3wSLk-c",
  authDomain: "carmarketplace3.firebaseapp.com",
  databaseURL: "https://carmarketplace3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "carmarketplace3",
  storageBucket: "carmarketplace3.appspot.com",
  messagingSenderId: "272976432715",
  appId: "1:272976432715:web:cd0b946254ff624c9307ce"
};
firebase.intializeApp(firebaseConfig);
var firestore = firebase.firestore();
const docRef = firestore.doc("sandwichData");
const outputHeader = document.querySelector("#Teat");
const inputTextField = document.querySelector("#Test2");
const saveButton = document.querySelector("#saveButton");
saveButton.addEventListener("click", function(){
  const textToSave = inputTextField.Value;
  console.log("I am going to save"+ textToSave+ "to Firestore");
  docRef.set({
    hotDogstatus: textToSave
  }).then(function(){
    console.log("Status saved!");
  }).catch(function(error){
    console.log("Got an error: ",error);
  });

})

var db = firebase.firestore();

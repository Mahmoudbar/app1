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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');



document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  var test1 = getInputVal('test1');
  var test2 = getInputVal('test2');

  saveMessage(test1,test2);


}
function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(test1,test2){
  var newMessageref = messagesRef.push();
  newMessageref.set({
    test1: test1,
    test2:test2
  });
}


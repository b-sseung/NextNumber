import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { loadData, noData } from "./ReadPage.js";
// import { speak } from "./SpeakPage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCW9MA3X7m-yiG1zlihG7K5Vo0x2XJJ_co",
  authDomain: "nextn-c436d.firebaseapp.com",
  projectId: "nextn-c436d",
  storageBucket: "nextn-c436d.appspot.com",
  messagingSenderId: "1051089963523",
  appId: "1:1051089963523:web:0151fbb82147a6e8885c36",
  measurementId: "G-8FBPYY80RD"
};

firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();

var settings = {
  timestampsInSnapshots: true,
};

var size = 0;
function allRead(){
  db.collection("LIST").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        size++;
        // names[position] = doc.get("name");
        // phones[position] = doc.get("tel");
        // passeds[position] = doc.get("passed");
        // numbers[position] = doc.get("number");
        // position++;
    });
  }).catch((error) => {
    console.log("Error getting documents: ", error);
  });
}

function readData(){
  var value = true;
  db.collection("LIST").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (value && doc.get("passed") == "no") {

        var name = doc.get("name");
        var number = doc.get("number");
        var phone = doc.get("tel");

        loadData(name, number, phone);
        console.log(doc.get("name"));
        // console.log(doc + ", " + doc.id);
        updatePass(doc.id);

        value = false;
      }
    });
  }).catch((error) => {
    console.log("Error getting documents: ", error);
  });

  if (value) {
    noData();
  }
}

function updatePass(num){
  db.collection("LIST").doc(num.toString()).update({
    passed: "yes"
  })
  .then(() => {
    console.log("Document successfully updated!");
  })
  .catch((error) => {
    console.error("Error updating document: ", error);
  }); 
}

function addData(title, num, name, tel, temperature) {
  var today = new Date();
  db.collection("LIST").doc(title.toString()).set({
    number: num,
    name: name,
    time: today.toLocaleString(),
    tel: tel,
    temperature: temperature,
    passed: "no"
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });
}

console.log("tlqkf");


export {size, allRead, readData, updatePass, addData};
import { size, allRead, addData } from "./firebase.js";

window.onload = function(){
  var numberBox = document.getElementById("number");
  var nameBox = document.getElementById("name");
  var telBox = document.getElementById("tel");
  var temperatureBox = document.getElementById("temperature");

  var addButton = document.getElementById("add");
  var cancelButton = document.getElementById("cancel");

  allRead();

  var position = size;
  addButton.addEventListener("click", function(){
    
    addData(position, numberBox.value, nameBox.value, telBox.value, temperatureBox.value);
    numberBox.value = "";
    nameBox.value = "";
    telBox.value = "";
    temperatureBox.value = "";
    position++;

    numberBox.focus();
  });

  cancelButton.addEventListener("click", function(){
    numberBox.value = "";
    nameBox.value = "";
    telBox.value = "";
    temperatureBox.value = "";

    numberBox.focus();
  })
}
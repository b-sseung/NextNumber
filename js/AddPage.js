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
    var title = ("000000" + (size+position))
    // console.log(size + ", " + position + ", " + title + ", " + );
    var cutTitle = title.substring(title.length-6, title.length);
    addData(cutTitle, numberBox.value, nameBox.value, telBox.value, temperatureBox.value);
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
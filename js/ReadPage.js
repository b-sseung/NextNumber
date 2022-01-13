import {names, phones, passeds, numbers, allRead, updatePass} from "./firebase.js";

window.onload = function(){
    
  var position = 0;

  var nextbutton = document.getElementById("button");
  var numberBox = document.getElementById("number");
  var nameBox = document.getElementById("name");
  var telBox = document.getElementById("tel");

  allRead();

  nextbutton.addEventListener("click", function(){
    allRead();

    console.log(names);
    console.log(phones);
    console.log(passeds);
    console.log(numbers);

    while (passeds.length > position && passeds[position] != "no") {
      position++;
    }

    if (passeds.length == position) return;

    loadData(position);
    
    updatePass(position);

    position++;
  });
  
  function loadData(position) {
    numberBox.innerText = numbers[position];
    nameBox.innerText = names[position];
    telBox.innerText = phones[position];
  }
}


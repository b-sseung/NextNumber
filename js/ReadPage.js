import {allRead, updatePass, readData} from "./firebase.js";

var nextbutton, numberBox, nameBox, telBox;
window.onload = function(){
    
  var position = 0;

  nextbutton = document.getElementById("button");
  numberBox = document.getElementById("number");
  nameBox = document.getElementById("name");
  telBox = document.getElementById("tel");

  allRead();

  nextbutton.addEventListener("click", function(){
    readData();

    // allRead();

    // console.log(names);
    // console.log(phones);
    // console.log(passeds);
    // console.log(numbers);

    // while (passeds.length > position && passeds[position] != "no") {
    //   position++;
    // }

    // if (passeds.length == position) {
    //   return;
    // }

    // loadData(position);
    
    // updatePass(position);

    // position++;
  });

}

function loadData(number, name, tel) {
  numberBox.innerText = number;
  nameBox.innerText = name;
  telBox.innerText = tel;
}

function noData() {
  numberBox.innerText = "대기자가 없습니다.";
  nameBox.innerText = "";
  telBox.innerText = "";
}


export { loadData, noData };


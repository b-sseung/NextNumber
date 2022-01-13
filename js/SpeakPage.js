import {names, phones, passeds, allRead, updatePass} from "./firebase.js";

window.onload = function() {
  
  var position = 0;

  var nextbutton = document.getElementById("nextButton");
  var replaybutton = document.getElementById("replayButton");

  allRead();

  nextbutton.addEventListener("click", function(){
    allRead();

    console.log(names);
    console.log(phones);
    console.log(passeds);

    while (passeds.length > position && passeds[position] != "no") {
      position++;
    }

    if (passeds.length == position) return;

    speak(names[position]);

    updatePass(position);

    position++;
  });

  replaybutton.addEventListener("click", function(){
    speak(names[position-1]);
  });

  function speak(text) {

    window.speechSynthesis.cancel() // 현재 읽고있다면 초기화
  
    const speechMsg = new SpeechSynthesisUtterance()
    speechMsg.rate = 1 // 속도: 0.1 ~ 10      
    speechMsg.pitch = 1 // 음높이: 0 ~ 2
    speechMsg.lang = "ko-KR"
    speechMsg.text = text
    
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg)
  }
}


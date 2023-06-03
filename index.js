var buttonSet = document.querySelectorAll(".drum");

function checkAudio(text){
    switch (text) {
        case "w":
          var tom1 = new Audio("./sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("./sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("./sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("./sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var kickBass = new Audio("./sounds/kick-bass.mp3");
          kickBass.play();
          break;
        case "k":
          var crash = new Audio("./sounds/crash.mp3");
          crash.play();
          break;
        default:
          var snare = new Audio("./sounds/snare.mp3");
          snare.play();
          
          break;
      }
}

function animation(key){
    var tag=document.querySelector("."+key)
    tag.classList.add("pressed");
    setTimeout(function(){
        tag.classList.remove("pressed");
    }, 100);
}

for (var i = 0; i < buttonSet.length; i++) {
  buttonSet[i].addEventListener("click", function () {
    var buttonText = this.innerHTML;
    
    checkAudio(buttonText)
    animation(buttonText)

  });
}

document.addEventListener("keydown",function(event) {
    var keyText=event.key
   
    checkAudio(keyText)
    animation(keyText)
})

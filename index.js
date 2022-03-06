var totalbuttons = document.querySelectorAll(".kit").length;
for (var i = 0; i < totalbuttons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInner = this.innerHTML;
        makesound(buttonInner);
        buttonAnimation(buttonInner);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default: console.log(buttonInner);
    }

}

function buttonAnimation(currentkey){
    var anmiated=document.querySelector("."+currentkey);
    anmiated.classList.add("pressed");
    setTimeout(function(){
    anmiated.classList.remove("pressed");
        
    },100)
}

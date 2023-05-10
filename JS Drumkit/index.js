let btns = document.querySelectorAll(".drum");

for(i=0; i<btns.length; i++)  {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
        console.log(event);    
        var buttonInnerHTML= this.innerHTML;
            playSound(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
    });

}

    document.addEventListener("keydown" ,function(event) {
        playSound(event.key);
        buttonAnimation(event.key);
    });


function playSound(key) {

    switch (key) {
        case "a":
            var kick = new Audio("sounds/Kick.wav");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/Snare.wav");
            snare.play();
            break;
        case "f":
            var hats = new Audio("sounds/Hats.wav");
            hats.play();
            break;
        case "r":
            var Tom1 = new Audio("sounds/Tom1.wav");
            Tom1.play();
            break;
        case "t":
            var Tom2 = new Audio("sounds/Tom2.wav");
            Tom2.play();
            break;
        case "y":
            var Tom3 = new Audio("sounds/Tom3.wav");
            Tom3.play();
            break;
        case "w":
            var Crash = new Audio("sounds/Crash.wav");
            Crash.play();
            break;
        case "d":
            var Clap = new Audio("sounds/Clap.wav");
            Clap.play();
            break;
           
        default:
            console.log(buttonInnerHTML);
            break;
    }    
};

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
        
    }

$(document).ready(function() {
    let numOfButtons = $(".drum").length;

    for (let i = 0; i < numOfButtons; i++) {
        $(".drum").eq(i).on("click", function() {
            let buttonInnerHTML = $(this).html();
            listeningEvent(buttonInnerHTML);
            buttonAnimation(buttonInnerHTML);
        });
    }

    // Keyboard Event
    $(document).on("keypress", function(e) {
        listeningEvent(e.key);
        buttonAnimation(e.key);
    });

    function listeningEvent(listen) {
        let description = $("#drumDescription");
        switch (listen) {
            case "w":
                description.text("Tom 1 was pressed");
                let tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                description.text("Tom 2 was pressed");
                let tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                description.text("Tom 3 was pressed");
                let tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                description.text("Tom 4 was pressed");
                let tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                description.text("Crash was pressed");
                let crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "k":
                description.text("Kick Bass was pressed");
                let kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            case "l":
                description.text("Snare was pressed");
                let snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            default:
                console.log("Unknown button pressed");
                break;
        }
    }

    function buttonAnimation(key) {
        var activeButton = $("." + key);
        activeButton.addClass("pressed");
        setTimeout(function() {
            activeButton.removeClass("pressed");
        }, 100);
    }
});

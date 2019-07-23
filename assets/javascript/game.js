$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let currentCrystal = 0;
    let gameNumber = 0;
    
    let redCrystal = 0;
    let blueCrystal = 0;
    let greenCrystal = 0;
    let yellowCrystal = 0;

    function newGame() {
        $("#PointsToMatch").empty();
        randomNumber();
        currentCrystal = 0;
        randomCrystalNumber();
        $("#score").html(currentCrystal);
    };

    function randomNumber() {
        gameNumber = (Math.floor(Math.random()*100) + 21);
        $("#PointsToMatch").html(gameNumber);
    };

    function randomCrystalNumber() {
        redCrystal = Math.floor((Math.random()*11)+1);
        blueCrystal = Math.floor((Math.random()*11)+1);
        yellowCrystal = Math.floor((Math.random()*11)+1);
        greenCrystal = Math.floor((Math.random()*11)+1);
        let ranCrystal = Math.floor(Math.random()*4);
        if (ranCrystal === 0) {
            redCrystal = 1;
        } else if(ranCrystal === 1) {
            blueCrystal = 1;
        } else if(ranCrystal === 2) {
            yellowCrystal = 1;
        } else if(ranCrystal === 3) {
            greenCrystal = 1;
        };
    };

    $(".redCrystal").on("click", function() {
        currentCrystal += redCrystal;
        $("#score").html(currentCrystal);
        compareNumbers();
    });

    $(".blueCrystal").on("click", function() {
        currentCrystal += blueCrystal;
        $("#score").html(currentCrystal);
        compareNumbers();
    });

    $(".yellowCrystal").on("click", function() {
        currentCrystal += yellowCrystal;
        $("#score").html(currentCrystal);
        compareNumbers();
    });
 
    $(".greenCrystal").on("click", function() {
        currentCrystal += greenCrystal;
        $("#score").html(currentCrystal);
        compareNumbers();
    });

    function compareNumbers() {
        if(currentCrystal === gameNumber) {
            wins ++
            $("#wins").html(wins);
            alert("Congratulations! You win!");
            newGame();
        } else if (currentCrystal > gameNumber) {
            losses ++
            $("#losses").html(losses);
            alert("You lost. Try again!");
            newGame();
        }
    };

    newGame();

});
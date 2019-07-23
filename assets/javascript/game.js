$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let currentCrystal = 0;
    let gameNumber = 0;
    
    let redCrystal = 0;
    let blueCrystal = 0;
    let greenCrystal = 0;
    let yellowCrystal = 0;

    $("#title").html("Crystals Collector- The Game!");
    $("#paraOne").html("The random number assigned below is your goal. By clicking on one of the four crystals below you will add points to your score.");
    $("#paraTwo").html("You win the game by matching the Points to Match. You lose if you go over this number. The value of each crystal will be hidden until you click on it. The values of the crystals will change when you start a new game. Good luck!")
    $("#spanScore").html("Your total score is: ");
    $(".redCrystal").html("<img src='./assets/images/redcrystal.jpg' width='100px' height='100px' alt='red crystal'>");
    $(".blueCrystal").html("<img src='./assets/images/bluecrystal.jpg' width='100px' height='100px' alt='blue crystal'>");
    $(".greenCrystal").html("<img src='./assets/images/greencrystal.jpg' width='100px' height='100px' alt='green crystal'>");
    $(".yellowCrystal").html("<img src='./assets/images/yellowcrystal.jpg' width='100px' height='100px' alt='yellow crystal'>");
    $("#randomNumber").html("Points to Match: ");
    $("#win").html("Wins: ");
    $("#lose").html("Losses: ");
    $("#foot").html("&copy;Copyright 2019 Aijah Chappell");

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
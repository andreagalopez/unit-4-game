// MIS VARIABLES   

var randomNumberP = $("#randomNumber");

var crystal1img = $("#crystal1");
var crystal2img = $("#crystal2");
var crystal3img = $("#crystal3");
var crystal4img = $("#crystal4");

var winsP = $("#wins");
var losesP = $("#loses");
var scoreP = $("#score");


$(document).ready(function () {
    // Start Game function 
    // Generate random number to display in randomNumberP (19-120).


    var crystalArray = [];
    var total = 0;
    var winsCount = 0;
    var losesCount = 0;
    var randomNumber = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;


    function reset(){
        crystalArray = [];
        startGame();
        total = 0;

    }

    // Asign random number to the 4 crystals (1-12).

    function startGame(){

    randomNumber = Math.floor(Math.random() * (121 - 19) + 19);
    randomNumberP.text(randomNumber);
    console.log(randomNumber);

    crystal1 = Math.floor(Math.random() * (13 - 1) + 1);
    crystalArray.push(crystal1)
    console.log(crystal1);

    crystal2 = Math.floor(Math.random() * (13 - 1) + 1);
    crystalArray.push(crystal2)
    console.log(crystal2);

    crystal3 = Math.floor(Math.random() * (13 - 1) + 1);
    crystalArray.push(crystal3)
    console.log(crystal3);

    crystal4 = Math.floor(Math.random() * (13 - 1) + 1);
    crystalArray.push(crystal4)
    console.log(crystal4);
}
startGame();


    // Create array with all the on clicks for each crystal. 

    // for each click display total and keep adding 

    $("#crystal1").click(function () {
        play (crystal1);
        console.log(total);
    });


    $("#crystal2").click(function () {
        play (crystal2);
        console.log(total);
    });


    $("#crystal3").click(function () {
        play (crystal3);
        console.log(total);
    });


    $("#crystal4").click(function () {
        play (crystal4);
        console.log(total);

    });



    function play(crystal) {

        total = total + crystal;
        scoreP.text(total);

        console.log(`total ${total}`);
        console.log(`randomNumber ${randomNumber}`);
        if (total === randomNumber) {
            alert("GANASTE");
            winsCount++;
            winsP.text(winsCount);
            reset();
        }

        else if (total > randomNumber) {
            alert("LOOSER");
            losesCount++;
            losesP.text(losesCount);
            reset();
        }

        else {
        }
    }






});

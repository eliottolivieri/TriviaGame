
var totScore = 0;
var wrong= 0;
var timez;

function startGame(){

    totScore = 0;
    var wrong = 0;

    timez = setInterval(myTimer, 1000);
    var maxime = 60;
    $("#startButton").hide();
    $("#scoreKeeper").hide();

    function myTimer() {
        if(maxime > 0){
            maxime = maxime -1;
            $("#myCounter").text("You have "+ maxime + " seconds to submit your answers");
        }
        else{
            $("#myCounter").text("Game Over!");
            hideDiv();
            console.log("Your total score is " + totScore + " out of 5.");
            console.log("Right answers: " + totScore);
            console.log("Wrong answers: " + wrong);
            clearInterval(timez);
            $("#scoreKeeper").show();
            $("#myScore").text("Your total score is " + totScore + " out of 5.");
            $("#myRight").text("Right answers: " + totScore);
            $("#myWrong").text("Wrong answers: " + wrong);
            $("#startButton").text("New Game");
            $("#startButton").show();
           
        }
    }


}

function displayDiv() {
    document.getElementById("questions").style.display = "block";
 }

 function hideDiv() {
    document.getElementById("questions").style.display = "none";
 }

function submitAnswers(){

// check for question 1

    if($("#Jaguar").is(':checked')) { 
       console.log("That's correct!");
       totScore++;
       console.log("Your updated score so far is " + totScore + " out of 5");
    } 
    if($("#Ferrari").is(':checked')) { 
        console.log("That's incorrect!");    
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
     }
     if($("#Ford").is(':checked')) { 
        console.log("That's incorrect!"); 
        wrong++;   
        console.log("Your updated score so far is " + totScore + " out of 5");
     }
     if($("#Rolce").is(':checked')) { 
        console.log("That's incorrect!");  
        wrong++;  
        console.log("Your updated score so far is " + totScore + " out of 5");
     }


// check for question 2 
    if($("#Agera").is(':checked')) { 
        console.log("That's correct!");
        totScore++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Chiron").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }
    if($("#VenomGT").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }
    if($("#NoneOfTheAbove").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    


//check for question 3 
    if($("#F355").is(':checked')) { 
        console.log("That's correct!");
        totScore++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Civic").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }
    if($("#Huracan").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Viper").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }
  

// check for question 4
    if($("#Subaru").is(':checked')) { 
        console.log("That's correct!");
        totScore++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Porsche").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Volvo").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Saab").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }


    // check for question 5
    if($("#Citroen").is(':checked')) { 
        console.log("That's correct!");
        totScore++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }
    if($("#Porsche").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#BMW").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }

    if($("#Audi").is(':checked')) { 
        console.log("That's incorrect!");
        wrong++;
        console.log("Your updated score so far is " + totScore + " out of 5");
    }
    

    $("#myCounter").text("All Done!");
    hideDiv();
    console.log("All Done!")
    console.log("Your total score is " + totScore + " out of 5.");
    console.log("Right answers: " + totScore);
    console.log("Wrong answers: " + wrong);
    clearInterval(timez);
    $("#scoreKeeper").show();
    $("#myScore").text("Your total score is " + totScore + " out of 5.");
    $("#myRight").text("Right answers: " + totScore);
    $("#myWrong").text("Wrong answers: " + wrong);
    $("#startButton").text("New Game");
    $("#startButton").show();

}

$("#mp3").click(function(){
    new Audio('https://www.highspec-computers.co.uk/darts/sounds/140.mp3').play();
  });
  $("#ogg").click(function(){
    new Audio('https://www.highspec-computers.co.uk/darts/sounds/bing.ogg').play();
  });



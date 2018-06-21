var myVar = setInterval(myTimer, 1000);
var maxime = 5;

function myTimer() {
    if(maxime > 0){
         maxime = maxime -1;
         $("#myCounter").text(maxime);
    }
    else{
        $("#myCounter").text("Game Over!");
    }
}





var buttonColours=["green","red","yellow","blue"];

var gamePattern=[];
var userClickedPattern=[];
var started=false;
var level=0;



$(document).keypress(function(){
    if(!started){
        nextsequence();
   
        started=true;
    }
});



$(".btn").click(function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function nextsequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("level "+level);
    var randomNumber=Math.random();
    randomNumber*=4;
    randomNumber=Math.floor(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    
   
}

function playSound(name){
    var x=new Audio("sounds/"+name+".mp3");
    x.play();


}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);

}

function checkAnswer(currentlevel){
    if((userClickedPattern[currentlevel]!=gamePattern[currentlevel]) && gamePattern.length!=0){
        $("body").addClass("game-over");
        setTimeout(function(){

            $("body").removeClass("game-over");

        },200);
        playSound("wrong");
        $("h1").text("Press A Key to Start");

      
        gamePattern=[];
        userClickedPattern=[];
        started=false;
         level=0;
         index=0;
         

    }
    
        

    else if(userClickedPattern.length==gamePattern.length){
        setTimeout(function(){
            nextsequence();

        },1000);
       
    }
    

}




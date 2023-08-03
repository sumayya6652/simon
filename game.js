// $("h1").text("hii");

var buttonColours=["red","blue","green","yellow"]
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var gameStarted=false;



    $(document).keypress(function(){
        if(gameStarted==false){
            $("#level-title").html("Level "+level)
        nextSequence();
        gameStarted=true;
        }
    });
   

    
    

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    var last_index=userClickedPattern.length-1;
    console.log(userClickedPattern)
    playSound(userChosenColour);

animatePress(userChosenColour);
checkAnswer(last_index)

})

function startOver(){
    level=0;
    gamePattern=[];
    gameStarted=false;
}



function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        if(userClickedPattern.length==gamePattern.length){
            setTimeout(function ()
        {
            nextSequence();
        },100);

        }
    }
    else{
        var audio = new Audio('sounds/wrong.mp3');
    audio.play()

    $("body").addClass("game-over");
    setTimeout(function ()
        {
            $("body").removeClass("game-over");
        },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    
}

function nextSequence(){
    userClickedPattern=[];

    level++;
    $("#level-title").html("Level "+ level);
    var randomNumbe=Math.random()*4;
var randomNumber=Math.floor(randomNumbe);

var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
// var last_index_game=gamePattern[gamePattern.length-1];



console.log(randomChosenColour)


var id="#"+randomChosenColour;
console.log(id)


    $(id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    // var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    // audio.play();
    playSound(randomChosenColour);

           
}

function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play()
}

function animatePress(currentColour){
// $("#"+currentColour).click(function(){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function ()
        {
            $("#"+currentColour).removeClass("pressed");
        },100
    );
// })
}






nextSequence();

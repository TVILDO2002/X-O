let gameStarter = "";
let PlayerTurn;

$(".btnStart").on("click", function(){
    randomNumber()
})

function randomNumber(){
    let ran = Math.floor( Math.random() *2)
    if(ran === 0){
        gameStarter = "X";
    } else if(ran === 1){
        gameStarter = "O";
    }
    $(".turn").text(gameStarter + " Turn");

    PlayerTurn = gameStarter;
}

for(let i=1;i<10;i++){
    $(".boardPart" + i).on("click" ,function(){
        $(".boardPart" + i).val(PlayerTurn)
        checkWinner();
        if(PlayerTurn === "X"){
            PlayerTurn ="O";
            $(".turn").text(PlayerTurn + " Turn");
        } else if(PlayerTurn === "O"){
            PlayerTurn = "X";
            $(".turn").text(PlayerTurn + " Turn");
        }
    })
}

function checkWinner(){
    // X Winning chances 
    if($(".boardPart1").val() === "X" && $(".boardPart4").val() === "X" && $(".boardPart7").val() === "X"){
        alert("X Wins");
    }
    if($(".boardPart1").val() === "X" && $(".boardPart2").val() === "X" && $(".boardPart3").val() === "X" || $(".boardPart4").val() === "X" && $(".boardPart5").val() === "X" && $(".boardPart6").val() === "X" || $(".boardPart7").val() === "X" && $(".boardPart8").val() === "X" && $(".boardPart9").val() === "X"){
        alert("X Wins");
    }
    if($(".boardPart2").val() === "X" && $(".boardPart5").val() === "X" && $(".boardPart8").val() === "X"){
        alert("X Wins");
    }
    if($(".boardPart3").val() === "X" && $(".boardPart6").val() === "X" && $(".boardPart9").val() === "X"){
        alert("X Wins");
    }
    if($(".boardPart1").val() === "X" && $(".boardPart5").val() === "X" && $(".boardPart9").val() === "X"){
        alert("X Wins");
    }
    if($(".boardPart7").val() === "X" && $(".boardPart5").val() === "X" && $(".boardPart3").val() === "X"){
        alert("X Wins");
    }
    //O winning Chances
    if($(".boardPart1").val() === "O" && $(".boardPart4").val() === "O" && $(".boardPart7").val() === "O"){
        alert("O Wins");
    }
    if($(".boardPart1").val() === "O" && $(".boardPart2").val() === "O" && $(".boardPart3").val() === "O" || $(".boardPart4").val() === "O" && $(".boardPart5").val() === "O" && $(".boardPart6").val() === "O" || $(".boardPart7").val() === "O" && $(".boardPart8").val() === "O" && $(".boardPart9").val() === "O"){
        alert("O Wins");
    }
    if($(".boardPart2").val() === "O" && $(".boardPart5").val() === "O" && $(".boardPart8").val() === "O"){
        alert("O Wins");
    }
    if($(".boardPart3").val() === "O" && $(".boardPart6").val() === "O" && $(".boardPart9").val() === "O"){
        alert("O Wins");
    }
    if($(".boardPart1").val() === "O" && $(".boardPart5").val() === "O" && $(".boardPart9").val() === "O"){
        alert("O Wins");
    }
    if($(".boardPart7").val() === "O" && $(".boardPart5").val() === "O" && $(".boardPart3").val() === "O"){
        alert("O Wins");
    }
}

$(".btnReset").on("click",function(){
    $(".boardPart").val(" ")
    randomNumber();
})

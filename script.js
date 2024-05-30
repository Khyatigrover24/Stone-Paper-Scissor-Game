let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");

const GenerateCompChoice=()=>{
    const options=["rock","paper","scissor"];
    //rock,paper,scissor
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

}
const drawGame=()=>{
    document.getElementById("msg").innerHTML="Game was draw.Play again";
    document.getElementById("msg").style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        document.getElementById("user-score").innerHTML=userscore;
        document.getElementById("msg").innerHTML=`Congratulations,you win. Your ${userChoice} beats ${compChoice}`;
        document.getElementById("msg").style.backgroundColor="green";

    }
    else{
        compscore++;
        document.getElementById("comp-score").innerHTML=compscore;
        document.getElementById("msg").innerHTML=`You lose,${compChoice} beats your ${userChoice}`;
        document.getElementById("msg").style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //Generate computers choice
    const compChoice=GenerateCompChoice();

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper" ? false:true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice==="scissors" ? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="rock" ? false:true;

        }
        showWinner(userWin,userChoice,compChoice);
    }
}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});


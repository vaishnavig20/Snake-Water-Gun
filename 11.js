let userScore=0;
let compScore=0;
let userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
let scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const snake_div=document.getElementById("s");
const water_div=document.getElementById("w");
const gun_div=document.getElementById("g");


function getComputerChoice(){
const choices=['s','w','g'];
    var x=Math.floor(Math.random()*3);
    return choices[x];
}
function convertToWord(letter){
    if(letter==="s") return "Snake";
       if(letter==="w") return "Water";
    return "Gun";
}

function win(user,comp){
    userScore++;
    userScore_span.innerHTML= userScore;
      compScore_span.innerHTML= compScore;
    const smallUser="user".fontsize(3).sup();
    const smallComp="comp".fontsize(3).sup();
    result_p.innerHTML= `${convertToWord(user) }${smallUser}  beats ${convertToWord(comp)}${smallComp}  You Win!"`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 300);
}
function loss(user,comp){
     compScore++;
    userScore_span.innerHTML= userScore;
      compScore_span.innerHTML= compScore;
     const smallUser="user".fontsize(3).sup();
    const smallComp="comp".fontsize(3).sup();
    result_p.innerHTML= `${convertToWord(comp)}${smallComp}  beats ${convertToWord(user)}${smallUser}   You Lose!"`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function() 
  {document.getElementById(user).classList.remove('red-glow')}, 300);
}
function draw(user,comp){
     const smallUser="user".fontsize(3).sup();
    const smallComp="comp".fontsize(3).sup();
    result_p.innerHTML= `${convertToWord(user)}${smallUser}   draws with ${convertToWord(comp)} ${smallComp},Tie!"`;
    document.getElementById(user).classList.add('gray-glow');
     setTimeout(function() 
    {document.getElementById(user).classList.remove('gray-glow')},  300);
}

function game(userChoice){
const compChoice=getComputerChoice();
    switch(userChoice + compChoice){
        case "sw":
        case "wg":
        case "gs":
            
            win(userChoice , compChoice);
            break;
        case "ws":
        case "gw":
        case "sg":
            loss(userChoice , compChoice);
            
            break;
        case "ss":
        case "ww":
        case "gg":
            draw(userChoice , compChoice);
            
            break;
    }
}

function main(){
snake &&
snake_div.addEventListener('click',function(){
   game("s");
})
    water &&
water_div.addEventListener('click',function(){
   game("w");
})
    gun &&
gun_div.addEventListener('click',function(){
   game("g");
})
}
main();

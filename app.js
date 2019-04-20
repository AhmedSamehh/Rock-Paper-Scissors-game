let userScore = 0;
let cScore = 0;
const userScore_span= document.getElementById("myScore");
const cScore_span= document.getElementById("cpuScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function cpu() {
    const list=['r','p','s'];
    const random = Math.floor(Math.random(list)*3);
    return list[random];
}

function convertTo(letter) {
    if(letter === "r") return "Rock";
    else if(letter ==="p") return "Paper";
    else if(letter ==="s") return "Scissor";
}

function win(userChoice,computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cScore_span.innerHTML = cScore;
    const smallUser="You".fontsize(3);
    const smallComp="Computer".fontsize(3);
    result_p.innerHTML =  convertTo(userChoice) + smallUser+"  Beats  " + convertTo(computerChoice) +smallComp+ ", YOU WON!💪🏻🔥 ";
    document.getElementById(userChoice).classList.add('greenGlow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('greenGlow') },300)
}
function lose(userChoice,computerChoice) {
    cScore++;
    cScore_span.innerHTML = cScore;
    userScore_span.innerHTML = userScore;
    const smallUser="You".fontsize(3);
    const smallComp="Computer".fontsize(3);
    result_p.innerHTML =  convertTo(userChoice) + smallUser+"  Lost to  " + convertTo(computerChoice) +smallComp+ ", YOU LOSE..💩😪 ";
    document.getElementById(userChoice).classList.add('redGlow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('redGlow') },300)
}
function tie(userChoice,computerChoice) {
    const smallUser="You".fontsize(3);
    const smallComp="Computer".fontsize(3);
    result_p.innerHTML =  convertTo(userChoice) + smallUser+"  Equals  " + convertTo(computerChoice) +smallComp+ ", TIE..👀 ";
    document.getElementById(userChoice).classList.add('yellowGlow');
    setTimeout(function () {document.getElementById(userChoice).classList.remove('yellowGlow') },300)
}

function game(userChoice){
    const computerChoice=cpu();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice,computerChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            tie(userChoice,computerChoice);
            break;
    }
}

function main()
{
    cpu();
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissor_div.addEventListener('click', function () {
        game( "s");
    })
}

main();
let user_score = 0;
let comp_score = 0;
let user_score_span = document.getElementById('user-score');
let comp_score_span = document.getElementById('comp-score');
let scoreBoard_div = document.querySelector('.score-board ');
let results_div = document.querySelector('.results>p');
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissor_div = document.getElementById('s')
const restart_div = document.getElementById('a')

main();

function main() {
    rock_div.addEventListener('click', function () {
        Game('r')
    })
    paper_div.addEventListener('click', function () {
        Game('p')
    })
    scissor_div.addEventListener('click', function () {
        Game('s')
    })
    restart_div.addEventListener('click', function () {
        restart('a')
    })
    // console.log('hi')
}
function computerChoice() {
    const compChoice = ['r', 'p', 's'];
    let randomNumber = Math.floor(Math.random() * 3)
    return compChoice[randomNumber];
}

function Game(userChoice) {
    const user = userChoice;
    const comp = computerChoice();
    console.log(comp, user)
    // console.log(user, comp);
    //console.log("computer choice=" + computerChoices)
    // console.log("user choice =" + userChoice)
    switch (user + comp) {
        case "pr":
        case "sp":
        case "rs":
            win(user, comp);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(user, comp);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(user, comp);
            break;
        default:

    }

}

function win(userChoice, compChoice) {
    switch (userChoice) {
        case 'r':
            userChoice = "ROCK";
             break;
        case 'p':
            userChoice = "PAPER";
             break;
        case 's':
            userChoice = "SCISSOR";
             break;
    }
    switch (compChoice) {
        case 'r':
            compChoice = "ROCK";
            break;
        case 'p':
            compChoice = "PAPER";
            break;
        case 's':
            compChoice = "SCISSOR";
            break;
    }

    console.log('user wins')
    user_score++;
    user_score_span.innerHTML = user_score;
    results_div.innerHTML = userChoice + "  " + "BEATS" + " " + compChoice + ". YOU WINS!!"
}
function lose(userChoice, compChoice) {
    switch (userChoice) {
        case 'r':
            userChoice = "ROCK";
            break;
        case 'p':
            userChoice = "PAPER";
            break;
        case 's':
            userChoice = "SCISSOR";
            break;
    }
    switch (compChoice) {
        case 'r':
            compChoice = "ROCK";
            break;
        case 'p':
            compChoice = "PAPER";
            break;
        case 's':
            compChoice = "SCISSOR";
            break;
    }
    console.log('computer wins')
    comp_score++;
    comp_score_span.innerHTML = comp_score;
    results_div.innerHTML = userChoice + "  " + "LOSES TO" + " " + compChoice + ". COMPUTER WINS!!"
}
function draw(userChoice, compChoice) {
    switch (userChoice) {
        case 'r':
            userChoice = "ROCK";
            break;
        case 'p':
            userChoice = "PAPER";
            break;
        case 's':
            userChoice = "SCISSOR";
            break;
    }
    switch (compChoice) {
        case 'r':
            compChoice = "ROCK";
            break;
        case 'p':
            compChoice = "PAPER";
            break;
        case 's':
            compChoice = "SCISSOR";
            break;
    }
    console.log('tie')
    results_div.innerHTML = userChoice + "  " + "EQUALS" + " " + compChoice + "! IT'S A TIE"

}

function restart(message) {
    user_score = 0;
    comp_score = 0;
    comp_score_span.innerHTML = user_score;
    user_score_span.innerHTML = user_score;
    results_div.innerHTML = "RESTARTED! LET'S START! GIVE YOUR CHOICE A SHOT"
}
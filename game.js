let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let color = ["yellow" , "blue" , "green" , "red"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function() {
    if(started == false){
        started = true;

        levelUp();
    }
});

//game
function btnFlash(btn) {
    btn.classList.add("flash");
    //to remove the flash after a sec
    setTimeout(function() {
        btn.classList.remove("flash");
    },300);
}

function levelUp() {
    userSeq = [];
    //to change the level
    level++;
    h2.innerText = `Level ${level}`;

    //to generate randon color
    let randomIdx = Math.floor(Math.random() * 3);
    let randomClr = color[randomIdx];
    let randombtn = document.querySelector(`.${randomClr}`);

    //to store the seq of clrs
    gameSeq.push(randomClr);
    btnFlash(randombtn);
}

function checkSeq(idx) {
    //always the last value will be checked
    
    if(gameSeq[idx] === userSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML = `Game over, your score was <b>${level}.</b><br> Press any key to try again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

//user
function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    //check both seq
    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset() {
    let gameSeq = [];
    let userSeq = [];

    let level = 0;
    let started = false;
}
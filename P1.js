let GameSeq = [];
let UserSeq = [];

let btns = ["black", "blue", "brown", "red"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if( started == false ){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    }, 150);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 150);
}

function levelUp() {
    UserSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    GameSeq.push(randColor);
    console.log(GameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(UserSeq[idx] == GameSeq[idx]){
        if (UserSeq.length == GameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else{
        h3.innerHTML = `Game over! yur score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    UserSeq.push(userColor);
    checkAns(UserSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    GameSeq = [];
    UserSeq = [];
    level = 0;
}
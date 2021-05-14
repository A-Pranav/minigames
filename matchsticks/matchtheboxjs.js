/* utility function */

function ins1(){
    document.getElementById("instruction1").style.display="none";
}
function ins2(){
    document.getElementById("instruction2").style.display="none";
}



/* num patterns */
let patterns =
    [
        [0, 1, 2, 4, 5, 6],                 // patterns of 0
        [2, 5],                             // patterns of 1
        [0, 2, 3, 4, 6],                    // patterns of 2
        [0, 2, 3, 5, 6],                    // patterns of 3
        [1, 2, 3, 5],                       // patterns of 4
        [0, 1, 3, 5, 6],                    // patterns of 5
        [0, 1, 3, 4, 5, 6],                 // patterns of 6
        [0, 2, 5],                          // pattern of 7
        [0, 1, 2, 3, 4, 5, 6],              // pattern of 8
        [0, 1, 2, 3, 5, 6],                 // pattern of 9
        [],
        [1, 2, 4, 5]
    ]
function compare(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] == a2[i]) {
            continue;
        }
        else
            return false;
    }
    return true;
}




function id(str) {
    return document.getElementById(str);
}
function ele(str) {
    return document.querySelectorAll(str);
}
function create(str) {
    return document.createElement(str);
}
function randNum(max = 2, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}


/*


 Coding for winning Pages 
*/
const onWin = () => {
    let winningbox = create("div");
    document.body.appendChild(winningbox);
    winningbox.classList.add("winDiv", "fullScrn", "flex", "center", "absolute", "flexCol");
    winningbox.id = "winningbox"
    let winningmsg = create("div");
    winningbox.appendChild(winningmsg);
    winningmsg.classList.add("winningmsg", "flex", "center");
    winningmsg.innerHTML = "Solved";
    let tryingbtn = create("div");
    winningbox.appendChild(tryingbtn);
    tryingbtn.classList.add("tryingbtn", 'flex', "center");
    tryingbtn.innerHTML = "Play Again";
    tryingbtn.id = "play";
}
let mchbxindx = 0;
const mchstik = main => {
    let count = 0;
    let indx = 0;
    let stikbx = [];
    let val = 0;
    while (count < 5) {
        stikbx[count] = create("div");
        stikbx[count].classList.add("stikBox", "box" + indx++, "center");
        indx == 2 ? indx = 0 : indx = indx;
        main.appendChild(stikbx[count]);
        if (stikbx.length % 2 == 0) {
            let count2 = 2;
            while (count2--) {
                let stik = create("div");
                stik.classList.add("stik0", "matchstik");
                stik.pos = val++;
                stikbx[count].appendChild(stik);
            }
        }
        else {
            let stik = create("div");
            stik.classList.add("stik1", "matchstik");
            stik.pos = val++;
            stikbx[count].appendChild(stik);
        }
        count++;
    }
}
const mchbx = () => {
    let main = create("div");
    main.classList.add("main");
    main.id = mchbxindx++;
    mainBox.appendChild(main);
    mchstik(main);
}
const mchbxq = () => {
    let ques = create("div");
    ques.classList.add("ques");
    ques.id = mchbxindx++;
    quesBox.appendChild(ques);
    mchstik(ques);
}
const stikstak = () => {
    let stackBox = create("div");
    id("status").appendChild(stackBox);
    stackBox.classList.add("stackBox", "flex", "center");
    let count = stiksMoveCount;
    while (count--) {
        let stik = create("div");
        stackBox.appendChild(stik);
        stik.classList.add("stikInStack");
    }
}
const operatorBox = () => {
    let operBox = create("div");
    operBox.classList.add("operBox");
    mainBox.appendChild(operBox);
    let stikBox = [];
    stikBox[1] = create("div");
    stikBox[1].classList.add("stikBox1", "flex", "center");
    stikBox[0] = create("div");
    stikBox[0].classList.add("stikBox2", "flex", "center");
    let count = 2;
    while (count--) {
        stik = create("div");
        stik.classList.add("stik");
        operBox.appendChild(stikBox[count]);
        stikBox[count].appendChild(stik);
    }
}
let stiks = [];
let operatorstikEle;
let operSwitch = 1;
let switchesl = [0, 0, 0, 0, 0, 0, 0];
let switchesr = [...switchesl];
let operator = null;
const eventAdd = () => {
    stiks = document.querySelectorAll(".matchstik");
    for (let stik of stiks) {
        stik.addEventListener("click", function () {
            onOff(this)
        });
    }
    function onOff(stik) {
        let selctDiv = Math.floor(stik.parentElement.parentElement.id);
        if (!selctDiv) {
            if ((stiksMoveCount) || switchesl[stik.pos]) {
                switchesl[stik.pos] = 1 - switchesl[stik.pos];
                stik.style.opacity = 0.35;
                if (switchesl[stik.pos])
                    stik.style.opacity = 1;
                identifyNumLeft(stik.pos, switchesl[stik.pos]);
            }
        }
        else {
            if (stiksMoveCount || switchesr[stik.pos]) {
                switchesr[stik.pos] = 1 - switchesr[stik.pos];
                stik.style.opacity = 0.1;
                if (switchesr[stik.pos])
                    stik.style.opacity = 1;
                identifyNumRight(stik.pos, switchesr[stik.pos]);
            }
        }
        calculate();
    }
    operatorstikEle = document.querySelector(".stikBox2");
    operatorstikEle.addEventListener("click", function () {
        if (stiksMoveCount) {
            if (operSwitch) {
                this.style.opacity = 0.35;
                operSwitch = 0;
                operator = '-';
                lengthMoves--;
            }
            else {
                operSwitch = 1;
                operator = '+';
                this.style.opacity = 1;
                lengthMoves++;
            }
            calculate();
        }
    })
}
let num = [null, null];
let onSwitchesr = [];
let onSwitchesl = [];
var lengthMoves = 0;
const identifyNumRight = (touchstik, isOn) => {
    if (isOn)
        lengthMoves++;
    else
        lengthMoves--;
    switchesr.forEach((val, indx) => {
        let isInclude = onSwitchesr.includes(indx);
        if (val == 1) {
            (!isInclude) ?
                onSwitchesr.push(indx) : '';
        }
        else
            isInclude ?
                onSwitchesr.splice(onSwitchesr.indexOf(indx), 1) : '';
    });
    let onSwitchesSort = onSwitchesr.sort();
    let check = true;
    for (let i = 0; i < patterns.length; i++)
        if (patterns[i].length == onSwitchesSort.length && compare(patterns[i], onSwitchesSort)) {
            num[1] = i; check = false;
        }
    if (check) {
        num[1] = null;
    }
}
const identifyNumLeft = (touchstik, isOn) => {
    if (isOn)
        lengthMoves++;
    else
        lengthMoves--;
    switchesl.forEach((val, indx) => {
        let isInclude = onSwitchesl.includes(indx);
        if (val == 1) {
            (!isInclude) ?
                onSwitchesl.push(indx) : '';
        }
        else
            isInclude ?
                onSwitchesl.splice(onSwitchesl.indexOf(indx), 1) : '';
    });
    let onSwitchesSort = onSwitchesl.sort();
    let check = true;

    for (let i = 0; i < patterns.length; i++)

        if (patterns[i].length == onSwitchesSort.length && compare(patterns[i], onSwitchesSort)) {
            num[0] = i; check = false;
        }
    check ? num[0] = null : num[0] = num[0];
}

let userAnswer = null;
const calculate = () => {
    let exp = num[0] + operator + num[1];
    stiksMoveCount -= lengthMoves;
    lengthMoves = 0;
    showstiksMoveCount();
    if (num.every((val) => { return val != null })) {
        userAnswer = eval(exp);
        if (userAnswer == answer)
            id("winningbox").style.display = "flex";
    }
}
let stiksEle = null;
let answer;
function randQues(ans) {
    answer = ans;
    let lastDigit = ans % 10;
    let firstDigit = Math.floor(ans / 10);
    stiksEle = document.querySelectorAll(".matchstik");
    let indxl = 14;
    let indxr = 21;
    patterns[firstDigit].forEach((val, indx) => {
        stiksEle[indxl + val].style.opacity = 1;
    })
    patterns[lastDigit].forEach((val, indx) => {
        stiksEle[indxr + val].style.opacity = 1;
    })
}
let stiksMoveCount = null;
let moves = null;
function randOperand() {
    let num1 = randNum(10);
    let num2 = randNum(10);
    let operator = ['+', '-', '+'];
    let oper = operator[randNum(operator.length)];
    let operlen = 0;
    if (oper == '-')
        operlen = 1;
    randQues(Math.abs(eval(num1 + oper + num2)));
    let lD = (num1 + 3) % 10;
    let fD = (num2 + 2) % 10;
    let diff1 = 0;
    let diff2 = 0;
    diff1 = Math.abs((patterns[num1].length + patterns[num2].length) - (patterns[lD].length + patterns[fD].length));
    stiksMoveCount = diff1 + diff2 + operlen;
    showstiksMoveCount = () => {
        id("status").innerHTML = stiksMoveCount;
        stikstak();
    }
    moves = showstiksMoveCount();
    let indxl = 0;
    let indxr = 7;
    patterns[lD].forEach((val, indx) => {
        switchesl[val] = 1;
        stiksEle[indxl + val].style.opacity = 1;
        num[0] = lD;
    })
    patterns[fD].forEach((val, indx) => {
        switchesr[val] = 1;
        stiksEle[indxr + val].style.opacity = 1;
        num[1] = fD;
    })
}
const gameOrder = () => {
    mchbx();
    operatorBox();
    mchbx();
    eventAdd();
    mchbxq();
    mchbxq();
    randOperand();
    onWin();

    id("play").addEventListener("click", () => {
        id("winningbox").style.display = "none"
        for (let i in switchesl) {
            switchesl[i] = 0;
            switchesr[i] = 0;
        }
        for (let i = 0; i < stiksEle.length; i++)
            stiksEle[i].style.opacity = 0.35;
        randOperand();
    })

}
window.addEventListener("load", () => {
    const mainBox = id("mainBox");
    const quesBox = id("quesBox");
    gameOrder();
})
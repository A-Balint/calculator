
const arrOperatorsDot = ['+', '-', '×', '÷', '.'];
const arrOperators = ['+', '-', '×', '÷'];

const btn0 = document.querySelector('.btn0');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const btn7 = document.querySelector('.btn7');
const btn8 = document.querySelector('.btn8');
const btn9 = document.querySelector('.btn9');
const btnDot = document.querySelector('.btn-dot');
const btnCancel = document.querySelector('.btn-cancel');
const btnAdd = document.querySelector('.btn-add');
const btnSub = document.querySelector('.btn-sub');
const btnMulti = document.querySelector('.btn-multi');
const btnDiv = document.querySelector('.btn-div');
const btnEqu = document.querySelector('.btn-equ');


btn0.addEventListener('click', displayNumber);
btn1.addEventListener('click', displayNumber);
btn2.addEventListener('click', displayNumber);
btn3.addEventListener('click', displayNumber);
btn4.addEventListener('click', displayNumber);
btn5.addEventListener('click', displayNumber);
btn6.addEventListener('click', displayNumber);
btn7.addEventListener('click', displayNumber);
btn8.addEventListener('click', displayNumber);
btn9.addEventListener('click', displayNumber);
btnDot.addEventListener('click', displayFloat);
btnCancel.addEventListener('click', displayCancel);
btnAdd.addEventListener('click', displayOperatorAddSub);
btnSub.addEventListener('click', displayOperatorAddSub);
btnMulti.addEventListener('click', displayOperator);
btnDiv.addEventListener('click', displayOperator);
btnEqu.addEventListener('click', displayEqu);



function displayNumber(ev) {
    let btnContent = ev.target.textContent;
    let displayDiv = document.querySelector('.display');
    let oldDisplayText = displayDiv.textContent;

    let oldDisplayArray = Array.from(oldDisplayText);
    let arrLength = oldDisplayArray.length;

    if (arrOperators.find(item => item == oldDisplayArray[arrLength - 1])) {
        displayDiv.textContent = oldDisplayText + ' ' + btnContent;
    } else {
        let newDisplayText = oldDisplayText + btnContent;
        displayDiv.textContent = newDisplayText;
    }
}

function displayCancel(ev) {
    let displayDiv = document.querySelector('.display');
    displayDiv.textContent = '';

}

function displayFloat(ev) {
    let btnContent = ev.target.textContent;
    let displayDiv = document.querySelector('.display');
    let oldDisplayText = displayDiv.textContent;
    let oldDisplayArray = oldDisplayText.split(' ')
    let oldDisplayArrayLength = oldDisplayArray.length
    let lastElem = oldDisplayArray[oldDisplayArrayLength - 1]


    if (oldDisplayText == '') {
        displayDiv.textContent = '0' + btnContent;
    } else if (lastElem.includes('.')) {
        displayDiv.textContent = oldDisplayText;
        alert('Már kitettél egy pontot!')

    } else if (arrOperatorsDot.find(item => item == oldDisplayArray[oldDisplayArrayLength - 1])) {
        displayDiv.textContent = oldDisplayText + ' ' + '0' + btnContent;
    }


    else {
        displayDiv.textContent = oldDisplayText + btnContent;
    }
}

function displayOperatorAddSub(ev) {
    let btnContent = ev.target.textContent;
    let displayDiv = document.querySelector('.display');
    let oldDisplayText = displayDiv.textContent;

    let oldDisplayArray = Array.from(oldDisplayText);
    let arrLength = oldDisplayArray.length;

    if (oldDisplayText == '') {
        displayDiv.textContent = '0' + ' ' + btnContent;
    }

    else if (arrOperatorsDot.find(item => item == oldDisplayArray[arrLength - 1])) {
        displayDiv.textContent = oldDisplayText;
    } else {
        displayDiv.textContent = oldDisplayText + ' ' + btnContent;
    }
}

function displayOperator(ev) {
    let btnContent = ev.target.textContent;
    let displayDiv = document.querySelector('.display');
    let oldDisplayText = displayDiv.textContent;

    let oldDisplayArray = Array.from(oldDisplayText);
    let arrLength = oldDisplayArray.length;

    if (oldDisplayText == '') {
        displayDiv.textContent = oldDisplayText;
        alert('Ne kezdj operátorral műveletet!')
    }

    else if (arrOperatorsDot.find(item => item == oldDisplayArray[arrLength - 1])) {
        displayDiv.textContent = oldDisplayText;
    } else {
        displayDiv.textContent = oldDisplayText + ' ' + btnContent;
    }
}

const mathItUp = {
    '+': function (p1, p2) { return p1 + p2 },
    '-': function (p1, p2) { return p1 - p2 },
    '×': function (p1, p2) { return p1 * p2 },
    '÷': function (p1, p2) { return p1 / p2 }
}




function displayEqu(ev) {
    let btnContent = ev.target.textContent;
    let displayDiv = document.querySelector('.display');
    let oldDisplayText = displayDiv.textContent;
    let oldDisplayArray = oldDisplayText.split(' ');
    let oldDisplayArrayLength = oldDisplayArray.length
    let lastElem = oldDisplayArray[oldDisplayArrayLength - 1]

    if (arrOperators.find(item => item == lastElem)) {
        oldDisplayArray.splice(oldDisplayArrayLength-1, 1);

    }

    let arrNum = [];
    let arrOp = [];

    function feloszt(arr) {
        arr.forEach((item, ind) => (ind % 2 === 0) ? arrNum.push(parseFloat(item)) : arrOp.push(item));
    }

    feloszt(oldDisplayArray);


    total = arrNum[0];
    arrOp.forEach((elem, index) => total = mathItUp[elem](total, arrNum[index + 1]));

    displayDiv.textContent = total;

}

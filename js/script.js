"use strict";

// function func() {
// 	alert(document.⁡⁢⁣⁢getElementById⁡('test').value); //выведет '!'
// }

// function funcN() {
// 	let elem = document.⁡⁢⁣⁢getElementById⁡('test');
// 	alert(elem.⁡⁣⁢⁢className⁡);
// }

// function func(elem) {
// 	alert(elem.⁡⁣⁢⁢value⁡);
// }

// function funcK() {
// 	let elem = document.getElementById('test');
// 	elem.⁡⁣⁢⁢style.color⁡ = 'red';
// 	elem.⁡⁣⁢⁢style.fontSize⁡ = '20px';
// 	elem.⁡⁣⁢⁢style.mozBoxSizing⁡ = 'border-box';
// 	elem.⁡⁢⁢⁢style.cssFloat⁡ = 'left';
// }

/* function buttonClick() {
	let input = document.getElementById('input');
	input.value = '!!!';
} */

/* function button() {
    let i = document.getElementById('input');
    alert(i.value);
} */

// function button() {
//     let i = document.getElementById('inputA');
//     let b = document.getElementById('inputB');
//     let c = i.value;
//     let d = b.value;
//     i.value = d;
//     b.value = c;
//     let input1 = document.getElementById('inputA');
// 	let input2 = document.getElementById('inputB');
// 	let input1Value = input1.value;
// 	let input2Value = input2.value;
// 	input1.value = input2Value;
// 	input2.value = input1Value;
// }

/* function button(elem) {
    elem.value = 'New value';
} */

/* function button() {
    let i = document.getElementById('input');
    i.style.color = 'red';
} */

/* function button1() {
    let lock = document.getElementById('input');
    lock.disabled = true;
}
function button2() {
    let unlock = document.getElementById('input');
    unlock.disabled = false;
} */

/* function button(elem) {
   elem = document.getElementById("click").src="img/2.jpg";
}
function out(elem) {
    elem = document.getElementById("click").src="img/1.jpg";
} */

/* function hide() {
    document.getElementById("click").style.display = 'none';
 }

 function show() {
    document.getElementById("click").style.display = 'inline-block';
 } */

/*  function button(elem) {
    elem = document.getElementById("click");
    elem.value = 'New changes';
    elem.style.width = '150px';
    elem.style.height = '50px';
    elem.style.color = 'red';
    elem.border = 'green';
 } */

//  function block(elem) {
//     elem = document.getElementById('block');
//     elem.value = 'Fuck you';
//     elem.disabled = true;
//     if (elem.disabled == true) {
//         let newElem = document.getElementById('unblock');
//         newElem.style.display = 'block';
//         unblock();
//     } else {
//         elem.value = 'Sorry';
//     }
//  }

//  function unblock(elem) {
//     elem = document.getElementById('block');
//     elem.disabled = false;
//  }

/* let first = document.getElementById('block'),
    second = document.getElementById('unblock');

first.addEventListener('click', () => {
    first.disabled = true;
    second.style.display = 'inline-block';
});

second.addEventListener('click', () => {
    first.disabled = false;
    first.value = 'На меня снова можно нажать';
    second.style.display = 'none';
}); */

/* let click = document.querySelector('#click');

click.onclick = function () {
    click.value = +click.value + 1;
}; */

/* const first = document.getElementById('first'),
      second = document.getElementById('second'),
      click = document.getElementById('click');

click.onclick = function () {
    first.style.display = 'none';
    second.style.display = 'inline-block';
}; */

/* const click = document.getElementById("click");

click.addEventListener('click', () => {
    let first = document.getElementById("first"),
        second = document.getElementById("second"),
        input1 = first.value,
        input2 = second.value;
    
    first.value = input2;
    second.value = input1;
}); */

/* const click = document.getElementById("click");
let first = document.getElementById('first');
let second = document.getElementById('second');

click.addEventListener('click', () => {
    let num = +first.value;
    if (Number.isInteger(num)) {
        second.value = num ** 2;
    }
    if(!Number.isInteger(num)){
        alert('Enter the number!');
    }
}); */

/* const click = document.getElementById("click");

click.addEventListener('click', () => {
    click.disabled = true;
    click.style.cursor = 'not-allowed';
}); */

const addNum = document.querySelectorAll('.numb'),
      addSymbol = document.querySelectorAll('.symbol'),
      first = document.getElementById('first');

function click(val) {
    val.forEach(num => {
        num.addEventListener('click', () => {
            first.value += num.value; 
        });
    });
}

click(addNum);
click(addSymbol);
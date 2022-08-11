"use strict";

function func() {
	alert(document.getElementById('test').value); //выведет '!'
}

function funcN() {
	var elem = document.getElementById('test');
	alert(elem.className);
}

function func(elem) {
	alert(elem.value);
}
'use strict';
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
/*
let inp = document.querySelectorAll('input');
for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('blur', func)
}
let val = document.getElementById('test')
function func() {
    val.innerHTML = this.value
}
*/

// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.
/*
let elems = document.querySelectorAll('input');
for( let i = 0; i<elems.length;i++){
    elems[i].addEventListener('click', func);
}
function func(){
    alert(this.value);
    this.removeEventListener('click', func);
}
*/
// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
/*
let par = document.querySelectorAll('p');
for( let i = 0; i<par.length;i++){
    par[i].addEventListener('click', func);
}

function func() {
    this.innerHTML = this.innerHTML * this.innerHTML;
}
*/
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.

let getInput = document.querySelectorAll('input');

        for (let i = 0; i<getInput.length; i++) {
            getInput[i].addEventListener('blur', func);
        }

        function func() {
            if (Number(this.dataset.length) === Number(this.value.length)) {
                this.style.border = '3px solid green';
            } else {
                this.style.border = '3px solid red';
            }
        }
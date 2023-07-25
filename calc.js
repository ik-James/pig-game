'use strict';

const mode = document.getElementById('bgcolor');
const calcBody = document.getElementById('calc');

const btns = document.querySelectorAll('button');
const output = document.getElementById('result');

mode.addEventListener('click', function(){

    if (calcBody.style.backgroundColor !== 'black'){
        calcBody.style.backgroundColor = 'black';

    } else {
        calcBody.style.backgroundColor = '#f2f2f2';
    }
})


for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
    const calcBtn = btns[i].textContent;

        if(calcBtn === 'C'){
            output.value = '';
        } else if (calcBtn === '='){
            output.value = eval(output.value);
        } else{
            output.value += calcBtn;
        }
    })
}


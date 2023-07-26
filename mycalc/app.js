'use strict';
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener ('click', (a) => {
        switch(a.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '<=':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }              
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                }
                break;
            default:
                display.innerText += a.target.innerText;
        }
    });
});



let output = document.getElementById('display1');

let buttonx = Array.from(document.getElementsByClassName('number'));

buttonx.map( number => {
    number.addEventListener ('click', (x) => {
        switch(x.target.innerText){
            case 'C':
                output.innerText = '';
                break;
            case '<=':
                if(output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    output.innerText = eval(output.innerText);
                } catch{
                    output.innerText = 'Error'
                }
                break;
            default: 
                output.innerText += x.target.innerText;
        }
    })
})
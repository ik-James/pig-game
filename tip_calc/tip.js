'use strict';
const submit = document.querySelector('.btn');

const totalTip = document.querySelector('.totaltip');
const percent = document.querySelector('.percent');
const amtSpent = document.querySelector('.amtspent');
const demo = document.querySelector('.demo');


 function calcTip(){
   
    let amount = Number(amtSpent.value);



    if (amount < 100 && amount > 5){

        totalTip.value = amount + (amount *  0.2);
        percent.value = 20;
        demo.textContent = `Total payable amount is ${totalTip.value}`;

    } else if(amount > 100 && amount <= 1000){
        
        totalTip.value = amount + (amount *  0.15);
        percent.value = 15;
        demo.textContent = `Total payable amount is ${totalTip.value}`;

    } else if (amount > 1000){
        
        totalTip.value = amount + (amount *  0.1);
        percent.value = 10;
        demo.textContent = `Total payable amount: ${totalTip.value}`;

    } else if (amount <= 5) {
        demo.textContent = 'Enter a valid number';
    }
}

submit.addEventListener('click', calcTip);


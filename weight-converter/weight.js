'use strict';


kilo.addEventListener('input', function(){
    
    const output = document.querySelector('.pounds');
    const kilo = Number(document.getElementById('kilo').value);
    const demo = document.getElementById('demo')


    output.value = (kilo * 2.2).toFixed(2);

    demo.textContent = `You weigh ${output.value} pounds`;
})


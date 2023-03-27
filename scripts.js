setInterval(() =>{

    const secondPointer = document.querySelector('.secondPointer');

    horario = new Date();
    second = horario.getSeconds() * 6;


    secondPointer.style.transform = `translate(-30%, 20%) rotate(${second}deg)`;
    
}, 1000);
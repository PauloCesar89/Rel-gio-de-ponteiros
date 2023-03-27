setInterval(() =>{

    const secondPointer = document.querySelector('.secondPointer');

    horario = new Date();
    second = horario.getSeconds();

    secondPointer.style.transform = `rotate(${second}deg)`;
    
}, 1000);
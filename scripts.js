setInterval(() =>{

    const secondPointer = document.querySelector('.secondPointer');
    const minutePointer = document.querySelector('.minutePointer');
    const hourPointer = document.querySelector('.hourPointer');

    horario = new Date();
    second = horario.getSeconds() * 6; //multiplicar os segundos por 6 pois 1 segundo é igual a 6º no relogio (360º / 60 segundos = 6º)
    minute = horario.getMinutes() * 6;
    hour = horario.getHours() * 30;


    secondPointer.style.transform = `translate(-30%, 20%) rotate(${second}deg)`;
    minutePointer.style.transform = `translate(-30%, 20%) rotate(${minute}deg)`;
    hourPointer.style.transform = `translate(-30%, 45%) rotate(${hour}deg)`;
    
}, 1000);
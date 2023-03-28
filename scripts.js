setInterval(() => {

    const secondPointer = document.querySelector('.secondPointer');
    const minutePointer = document.querySelector('.minutePointer');
    const hourPointer = document.querySelector('.hourPointer');

    horario = new Date();
    second = horario.getSeconds() * 6;      //multiplicar os segundos por 6 pois 1 segundo é igual a 6º no relogio (360º / 60 segundos = 6º)
    minute = horario.getMinutes() * 6;     //multiplicar os minutos por 6 pois 1 minuto é igual a 6º no relogio (360º / 60 minutos = 6º)
    hour = horario.getHours() * 30;       //multiplicar as horas por 6 pois 1 hora é igual a 30º no relogio (360º / 12 horas = 30º)


    secondPointer.style.transform = `translate(-50%, 20%) rotate(${second}deg)`;
    minutePointer.style.transform = `translate(-50%, 20%) rotate(${minute}deg)`;
    hourPointer.style.transform = `translate(-50%, 45%) rotate(${hour}deg)`;

});
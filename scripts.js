const sec = document.querySelector('.secondPointer');

function timer(){
    const time = new Date();

    seconds: time.getSeconds();

}

setInterval( () =>{

    const {seconds} = timer();

    sec.Style.transform = `translate(-30%, 20%) rotate(${seconds} deg)`;

}, 1000);
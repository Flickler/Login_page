const slider = document.getElementById('slider');
let n = 1

setInterval(() =>{
    slider.src = `./assets/img/pexelsImg${n}.jpg`;
    n++;
    if(n>3){
        n = 1
    }
}, 8000);
const colorsPrimary = ["Red","Yellow","Blue"];
const colorsSecundary = ["Green","Orange","Violet"];
const colorsHexa = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btnPrim = document.getElementById("btn-primario");
const btnSec  = document.getElementById("btn-secundario");
const btnHexa = document.getElementById("btn-hexa");

const color = document.getElementById("color");

btnPrim.addEventListener("click",function(){
    const randonNumber = getRandonNumberPrim();

    document.body.style.backgroundColor = colorsPrimary[randonNumber];

    color.textContent = colorsPrimary[randonNumber];
})

function getRandonNumberPrim(){
    return Math.floor(Math.random() * colorsPrimary.length);
}

btnSec.addEventListener("click",function(){
    const randonNumber = getRandonNumberSec();

    document.body.style.backgroundColor = colorsSecundary[randonNumber];

    color.textContent = colorsSecundary[randonNumber];
})

function getRandonNumberSec(){
    return Math.floor(Math.random() * colorsPrimary.length);
}

btnHexa.addEventListener("click",function(){
    let colorHexa = "#";

    for(let i = 0 ; i < 6 ; i++){
        colorHexa += colorsHexa[getRandomNumberHexa()];
    }
    color.textContent = colorHexa
    
    document.body.style.backgroundColor = colorHexa;
})

function getRandomNumberHexa(){
    return Math.floor(Math.random() * colorsHexa.length);
}

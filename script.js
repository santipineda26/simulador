cont = 0;
xCirculo = 20;
temp = xCirculo;

function moverDibujo (){
    while(true){
        xCirculo++;
        temp = xCirculo;
        draw();
        Concurrent.Thread.sleep(1000);
    }
}

function draw (){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.clearRect(temp--,20,20,20);
    ctx.stroke();
    ctx.closePath();
}

function cronometro (){
    for(;;){
        var input = document.getElementById("cronometer").value;
        cont++;
        input = cont;
        cambiarValor(input);
        Concurrent.Thread.sleep(1000); 
    }
}

function cambiarValor(num){
    var input = document.getElementById("cronometer");
    input.value = num;
}

function saludar (){
    for(;;){
        p = document.getElementById("proceso2");
        texto = document.createTextNode("hola ");
        div = document.createElement('div');
        div.setAttribute('class', 'celda');
        div.appendChild(texto);
        p.appendChild(div);
        Concurrent.Thread.sleep(1000); 
    }
}

function main (){
    Concurrent.Thread.create(cronometro)
    //Concurrent.Thread.create(saludar)
    //Concurrent.Thread.create(moverDibujo)
}

function stop(){
    
}

var imgTag = new Image();
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var x = 0;
var y = 0;

imgTag.src = "./assets/img/car.webp";

function drawCar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(car, x, 45, 25, 100 * car.height / car.width);
}
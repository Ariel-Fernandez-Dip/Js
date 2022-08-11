const botonNumeros = document.getElementsByName( 'data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonDelete = document.getElementsByName('data-delete')[0];
const botonIgual = document.getElementsByName('data-igual')[0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior= '';
let operacion = undefined;
let i = 0;


botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        SelecOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function SelecOperacion(op){
    i = 0
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }

    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+" :
           calculo = anterior + actual;
           break;
        case "-":
            calculo = anterior - actual;
           break;
        case "X":
            calculo = anterior * actual;
           break;
        case "/":
            calculo = anterior / actual;
           break;        
        default:
           return;
       }
        i ++
        opeActual = calculo;
        operacion =undefined;
        opeAnterior = '';
    }

function agregarNumero(num){
    if (i === 1){
        i = 0 
        clear()
    }
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
};

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
};

clear();

let modoOscuro = document.getElementById("modo");
chequearModoOscuro(localStorage.getItem("oscuro"))
console.log(localStorage.getItem("oscuro"))
function chequearModoOscuro(modo){
    if (modo == "true"){
        console.log("true")
        document.body.id = "modoNormal"
    }
    else{
        console.log("false")
        document.body.id = "oscuro"
    }
}

modoOscuro.onclick = () =>{
    if (localStorage.getItem("oscuro") == "true"){
        localStorage.setItem("oscuro", "false")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
    else{
        localStorage.setItem("oscuro", "true")
        chequearModoOscuro(localStorage.getItem("oscuro"))
    }
}

let oscuro 

fetch("./data.json")
.then(response => response.json())
.then(data => oscuro = (data[0].nombre),actualizar())
function actualizar(){
    document.querySelector("#modo").textContent=oscuro
};


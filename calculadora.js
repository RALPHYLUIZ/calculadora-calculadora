let operador = '';
let numero1;
let numero2;
let resultado;



function calculadora(){

    //ENTRADA DO OPERADOR SELECIONADO
    operador = document.querySelector('#slcOperador').value;


    // alert('OPERADOR SELECIONADO FOI' + operador);

    //VERIFICA SE É O OPERADOR DE SOMA
    if (operador == '+') {
        //alert('VOCÊ ESCOLHEU A OPERAÇÃO DE SOMA!');
        somar();
        
    }

    //VERIFICA SE É O OPERADOR DE SUBTRAÇÃO

    if (operador == '-') {
        SUBTRAÇÃO('VOCÊ ESCOLHEU A OPERAÇÃO DE SUBTRAÇÃO!');
        
    }

    //VERIFICA SE É O OPERADOR DE MULTIPLICAÇÃO

    if (operador == '*') {
        MULTIPLICAÇÃO('VOCÊ ESCOLHEU A OPERAÇÃO DE MULTIPLICAÇÃO!');
        
    }

    //VERIFICA SE É O OPERADOR DE DIVISÃO

    if (operador == '/') {
        DIVISÃO('VOCÊ ESCOLHEU A OPERAÇÃO DE DIVISÃO!');
        
    }

}



//DECLARAÇÃO DA FUNÇÃO DE SOMAR
function somar(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (SOMAR)
    resultado = numero1 + numero2;
    //SAÍDA (VALOR DA SOMA)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}

function SUBTRAÇÃO(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (SUBTRAIR)
    resultado = numero1 - numero2;
    //SAÍDA (VALOR DA SUBTRAÇÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}

function MULTIPLICAÇÃO(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (multiplicar)
    resultado = numero1 * numero2;
    //SAÍDA (VALOR DA MULTIPLICAÇÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}

function DIVISÃO(){

    //ENTRADA DE DADO DO NUMERO 1
    numero1 = parseInt(document.querySelector('#numero1').value);
    //ENTRADA DE DADO DO NUMERO 2
    numero2 = parseInt(document.querySelector('#numero2').value);
    //PROCESSAMENTO (DIVISÃO)
    resultado = numero1 / numero2;
    //SAÍDA (VALOR DA DIVISÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    // alert('RESULTADO: ' + resultado);

}

//TRATAMENTO DAS IMAGENS DOS OPERADORES

let select = document.querySelector('#slcOperador');

select.addEventListener('change',function(){
    //alert('TESTE 123');


    let imgOperacao = document.querySelector('#imgOperacao');
    let op = select.options[select.selectedIndex].value;

    if(op == '+'){
    imgOperacao.setAttribute('src', 'img/adicionar.png');
    }
})
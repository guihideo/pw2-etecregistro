const inputN1=document.querySelector('input#n1');
const inputN2=document.querySelector('input#n2');
const resultado=document.querySelector('div#resultado');

function somar(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 + n2;
    resultado.innerHTML = `${soma}`;
}

function subtrair(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const subtracao = n1 - n2;
    resultado.innerHTML = `${subtracao}`;
}

function multiplicar(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const multiplicacao = n1 * n2;
    resultado.innerHTML = `${multiplicacao}`;
}

function dividir(){
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const divisao = n1 / n2;
    
    if(n2===0){
        document.getElementById('resultado').innerText="Não é possível dividir por 0";
    }
    else{
        resultado.innerHTML = `${divisao}`;
    }
}

function limpar(){
    inputN1.value="";
    inputN2.value="";
    resultado.innerHTML="";
}
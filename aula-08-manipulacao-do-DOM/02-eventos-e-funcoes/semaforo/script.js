function parar(){
    document.getElementById("parar").style.backgroundColor='red';
    document.getElementById('siga').style.backgroundColor='gray';
    document.getElementById("atencao").style.backgroundColor='gray';

}

function atencao(){
    document.getElementById("atencao").style.backgroundColor='yellow';
    document.getElementById('siga').style.backgroundColor='gray';
    document.getElementById("parar").style.backgroundColor='gray';

}

function siga(){
    document.getElementById('siga').style.backgroundColor='green';
    document.getElementById("parar").style.backgroundColor='gray';
    document.getElementById("atencao").style.backgroundColor='gray';
}
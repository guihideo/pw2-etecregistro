// JAVASCRIPT

// CAPTURANDO ELEMENTO DOM
const caixaMagica = document.getElementById("caixaMagica")

// ESCUTANDO OS EVENTOS REALIZADOS COM O ELEMENTO DA DOM
caixaMagica.addEventListener("mouseenter" , entradaMouse)
caixaMagica.addEventListener("mouseout" , saidaMouse)
caixaMagica.addEventListener("click" , clickMouse)

// CRIANDO UMA FUNÇÃO
function entradaMouse() {
    caixaMagica.innerText = "Olá, Hideo! ";
    caixaMagica.style.backgroundColor = "blue";
}

function saidaMouse() {
    caixaMagica.innerText = "Tchau, até breve! ";
    caixaMagica.style.backgroundColor = "red";
}

function clickMouse() {
    caixaMagica.innerText = "Você clicou! ";
    caixaMagica.style.backgroundColor = "purple";
}
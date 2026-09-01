//JavaScript

//SELECIONANDO ELEMENTOS PELA TAG
const p0 = window.document.getElementsByTagName('p')[0];
//ALTERANDO AS CARACTERÍSTICAS DO ELEMENTO
p0.style.color = '#ffd900';
p0.innerText = "Mudei o texto :-)";

const p1 = document.getElementsByTagName("p")[1];

//CAPTURANDO CORPO DO SITE
const corpoSite = window.document.body;
//ALTERANDO SUA COR
corpoSite.style.background = '#1a1a1a';

//ACESSANDO O CONTEÚDO DE UM ELEMENTO DOM
document.write(`</br> No segundo parágrafo do site está escrito assim: "${p1.innerText}"`);

const pID = document.getElementById("pID");
pID.innerText = "Selecionando elementos pelo ID";
pID.style.background= 'purple';

const pName = document.getElementsByName("pName")[0];
pName.innerText = "Selecionando elementos pelo NOME";
pName.style.background = 'blue';

const pClass = document.getElementsByClassName("pClass")[0];
pClass.innerText = "Selecionando elementos pela CLASSE";
pClass.style.background = 'red';

const pSelector = document.querySelector("#pSelector");
pSelector.innerText = "Selecionando elementos pelo SELETOR";
pSelector.style.background = 'yellow';
pSelector.style.color = 'black';

const praf = document.querySelector("#p");
praf.innerText = "Exibindo texto com innerText"

/* DOM => Document Object Model ou Modelo de Objeto de Documento
É a estrutura/arvore de elementos do HTML + CSS
que o JavaScript utiliza para manipular informações de tela */



const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-form");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}


// variáveis
const inputIdade = document.getElementById("festa");
const resultado = document.getElementById("result");
const message = document.getElementById("message");

// função
function resultadoFestaClick(event) {
    event.preventDefault();

    if (inputIdade.value === "") {
        message.style.display = "block";
        return false;
    }

    message.style.display = "none";

    if (inputIdade.value >= 18) {
        resultado.innerHTML = "🎉🍾🎶 BEM-VINDO À FESTA! APROVEITE! 🕺💃✨";
    } else {
        resultado.innerHTML = "🚫🔞😢 VOCÊ FOI BARRADO NA FESTA!";
    }

    inputIdade.value = "";
}

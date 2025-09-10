// variavies
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");

// função
function resultadoNotaClick(event) {
    event.preventDefault();
    // console.log(inputNota.value);
    // logica - condição
    if (inputNota.value >= 6) {
        resultado.innerHTML = "APROVADO ✅";
    } else {
        resultado.innerHTML = "REPROVADO ❌";
    }

    inputNota.value = ""

}
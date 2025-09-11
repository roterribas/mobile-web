// variavies
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");
const message = document.getElementById("message")

// função
function resultadoNotaClick(event) {
    event.preventDefault();
    // console.log(inputNota.value);
    // logica - condição
     if (inputNota.value == "") {
        message.style.display = "block";
        return false;
    }

        message.style.display = "none";
    
    if (inputNota.value >= 6) {
        resultado.innerHTML = "APROVADO ✅";
    } else {
        resultado.innerHTML = "REPROVADO ❌";
    }

    inputNota.value = ""

}
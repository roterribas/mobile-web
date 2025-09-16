const fomr = document.getElementById("newForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.querySelector("#email").value.trim();
    
    
    // condição de validação
    if (email === "") {
        alert("Prencha com o seu email")
        return false;
    }


    // limpa o campo
    form.reset()
});

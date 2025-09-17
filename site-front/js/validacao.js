const form = document.getElementById("newForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.querySelector("#email").value.trim();
    
    // validação: campo vazio
    if (email === "") {
        mensagem.textContent = "❌ Preencha com o seu e-mail ❌";
        mensagem.style.color = "red";
        mensagem.style.fontWeight = "bold";
        return false;
    }

    // validação simples: precisa conter @ e .
    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "⚠️ Digite um e-mail válido! ⚠️";
        mensagem.style.color = "yellow";
        mensagem.style.fontWeight = "bold";
        return false;
    }

    // sucesso
    mensagem.textContent = "✅ E-mail cadastrado com sucesso! ✅";
    mensagem.style.color = "green";
    mensagem.style.fontWeight = "bold";

    // limpa o campo
    form.reset();
});

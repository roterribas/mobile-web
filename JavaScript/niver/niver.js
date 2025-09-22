function diasParaNiver() {
    const hoje = new Date();
    const diaSemana = hoje.getDay(); // 0=Dom, 1=Seg, ..., 4=Quin
    let diasfaltando = 4 - diaSemana;
    const dias = document.getElementById("dias");

    if (diasfaltando < 0) {
        diasfaltando += 7;
    }

    dias.innerHTML = diasfaltando;
}

function atualizarHora() {
    const horaHTML = document.getElementById("hora");
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    horaHTML.textContent = `${hora}:${minutos}:${segundos}`;
}

// Seleciona elementos
const contador = document.getElementById("contador");
const somAlerta = document.getElementById("somAlerta");
const dataAlvo = new Date("2025-09-18T15:00:00");

// Função da contagem
function iniciarContagem() {
    const timer = setInterval(() => {
        const agora = new Date();
        const diferenca = dataAlvo - agora;

        if (diferenca <= 0) {
            clearInterval(timer);
            contador.textContent = "🎉 Parabéns! Chegou a hora! 🎉";
            somAlerta.play().catch(err => console.log("Som bloqueado:", err));
            soltaConfetes();
            return;
        }

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }, 1000);
}

// 🎉 Função de confetes
function soltaConfetes() {
    const emojis = ["🎉", "🎊", "✨", "💫", "🥳", "🎂"];
    for (let i = 0; i < 30; i++) {
        const confete = document.createElement("div");
        confete.className = "confete";
        confete.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        confete.style.left = Math.random() * 100 + "vw";
        confete.style.top = Math.random() * -100 + "px";
        confete.style.animationDuration = (Math.random() * 5 + 3) + "s";
        document.body.appendChild(confete);
    }
}

// ✅ Libera o som no primeiro clique em qualquer lugar da página
document.body.addEventListener("click", () => {
    somAlerta.play().then(() => {
        somAlerta.pause();
        somAlerta.currentTime = 0;
    }).catch(err => console.log("Som bloqueado:", err));

    diasParaNiver();
    atualizarHora();
    setInterval(atualizarHora, 1000);
    iniciarContagem();
}, { once: true });

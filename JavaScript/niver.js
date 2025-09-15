function diasParaNiver() {
    const hoje =  new Date();
    const diaSemana = hoje.getDay(); // 0=Dom, 1=Seg, ..., 4=Quin
    let diasfaltando = 4 - diaSemana;
    const dias = document.getElementById("dias");

    if (diasfaltando < 0) {
        diasfaltando += 7;
    }

    dias.innerHTML = diasfaltando

}

function atualizarHora() {
    const horaHTML = document.getElementById("hora");
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minutos =  agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    horaHTML.textContent = `${hora}:${minutos}:${segundos}`;

}

// chamar a função
diasParaNiver();

setInterval(atualizarHora, 1000);

atualizarHora();

// 🎉 Gerar confetes pela tela
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

soltaConfetes();
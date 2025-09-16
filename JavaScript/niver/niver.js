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
// Seleciona o elemento HTML que exibirá a contagem
const contador = document.getElementById("contador");

// Seleciona o elemento de áudio
const somAlerta = document.getElementById("somAlerta");

// Define a data e hora alvo (ano-mês-diaThora:minuto:segundo)
const dataAlvo = new Date("2025-09-18T15:00:00");

// Cria um intervalo que será executado a cada 1 segundo (1000ms)
const timer = setInterval(() => {

    // Pega o horário atual
    const agora = new Date();

    // Calcula a diferença em milissegundos entre a data alvo e agora
    const diferenca = dataAlvo - agora;

    // Se a diferença for menor ou igual a zero, a contagem acabou
   if (diferenca <= 0) {
    clearInterval(timer);              
    contador.textContent = "🎉 Parabéns! Chegou a hora! 🎉"; 
    somAlerta.play();                  // toca o som de parabéns
    return;                            
}


    // Calcula quantos dias faltam
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    // Calcula quantas horas faltam (resto dos dias)
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calcula quantos minutos faltam (resto das horas)
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    // Calcula quantos segundos faltam (resto dos minutos)
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Exibe a contagem na div
    contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

}, 1000); // Executa a cada 1 segundo


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
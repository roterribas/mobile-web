const imagem = ["../../img/img-1.jpg", "../../img/img-2.jpg", "../../img/img-3.jpg" ];

let index = 0;
const banner = document.getElementById("banner");

function trocarImagem() {
    index ++;

    if (index >= imagem.length) {
        index = 0; // se passar da ultima, volta para a primeira
    }

    banner.src = imagem[index];
}

// trocarImagem();
setInterval(trocarImagem, 3000);
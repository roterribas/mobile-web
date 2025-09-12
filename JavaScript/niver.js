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

// chamar a função
diasParaNiver();
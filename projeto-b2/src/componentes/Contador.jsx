import "./Contador.css";

import { useState } from "react";

const Contador = () => {
    // inicializa o estado com valor 0
    const [count, setCount] = useState(0);

    const aumentar = () => {
        setCount(count + 1);
    }

    const diminuir = () => {
        setCount(count - 1);
    }

    return(
        <main class="container">
            <h1>{count}</h1>

            <section>
                <h2>RESULTADO</h2>
                <button onClick={aumentar} style={{ marginRight: '10px' }}>AUMENTAR</button>
                <button onClick={diminuir}>DIMINUIR</button>
            </section>
        </main>
    )
}

export default Contador;
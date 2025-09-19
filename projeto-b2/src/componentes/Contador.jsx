import { Fragment } from "react"

const Contador = () => {

    const aumentar = () => {
        alert("ola rodrigo 1")
    }

    const diminuir = () => {
        alert("ola rodrigo 2")
    }

    return(
        <Fragment>
            <h1>Contador</h1>

            <section>
                <h2>RESULTADO</h2>
                <button onClick={aumentar} style={{ marginRight: '10px' }}>AUMENTAR</button>
                <button onClick={diminuir}>DIMINUIR</button>
            </section>
        </Fragment>
    )
}

export default Contador;
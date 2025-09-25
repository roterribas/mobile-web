const Banner = (props) => {

    console.log(props)

    // o cildrem permite que você passa renderize 
    // conteudo dinamicoo dentro de um componente em React

    return (
        <section>
            {props.children}
        </section>
    )
}

export default Banner;
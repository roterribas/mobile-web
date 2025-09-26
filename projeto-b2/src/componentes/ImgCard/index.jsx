import "./ImgCard.css"

export default function ImgCard(props) {
  console.log(props)

  return (
    <div className="image-card">
        <img src={props.imagem} alt={props.caption || 'imagem padrão'}/>
        
    
        <h1 className="img-card-caption">
          {props.caption}
        </h1>

        <p>
          {props.texto}
        </p>

        <a href={props.link} target="_black">
          {props.link}
        </a>
    </div>
  )
}

import img1 from "../../assets/img-card1.jpg"
import "./ImgCard.css"

export default function ImgCard(props) {
  return (
    <div className='image-card'>
        <img src={img1} alt={props.caption || 'imagem padrão'}/>
    <p className="img-card-caption">
        {props.caption}
    </p>
    </div>
  )
}

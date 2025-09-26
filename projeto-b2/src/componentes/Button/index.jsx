import "./Button.css";


export default function Button(props) {
  console.log(props)

  return (
   <button className="custom-button" onClick={props.onclick}>
      {props.text}
   </button>
  )
}

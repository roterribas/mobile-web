import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import ImgCard from "./componentes/ImgCard";
import Button from "./componentes/Button";
import img1 from "./assets/img-card1.jpg";
import img2 from "./assets/img-card2.jpg";
import img3 from "./assets/img-card3.jpg";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("teste");
  }

  

  return (
    <main className="container">
      <Header title="Meu site"/>
      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>

      <ImgCard 
        caption="Uma imagem interesante" 
        imagem={img1}
        texto="lorem ipsum Popeto"
        link="https://www.terra.com.br/"
      />  

      <ImgCard 
        caption="Popeto" 
        imagem={img2}
        texto="Popeto new"
        link="https://www.uol.com.br/"
      /> 

      <ImgCard 
        caption="Caio Futebol Clube" 
        imagem={img3}
        texto=" Popeto Popeto Bangu"
        link="https://www.mundocanibal.com.br/"
      /> 

      <Button text="clique aqui" onclick={handleClick}/>       
    </main>
  )
}

export default App

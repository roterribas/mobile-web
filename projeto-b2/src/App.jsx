import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import ImgCard from "./componentes/ImgCard";
import Button from "./componentes/Button";
import "./App.css";

function App() {

  

  return (
    <main className="container">
      <Header title="Meu site"/>
      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>
      <ImgCard caption="Uma imagem interesante"/>  

      <Button text="clique aqui"/>       
    </main>
  )
}

export default App

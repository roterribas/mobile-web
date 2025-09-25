import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import ImgCard from "./componentes/ImgCard";
import "./App.css";

function App() {

  

  return (
    <main className="container">
      <Header title="Meu site"/>
      <Banner>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você encontra as melhores ofertas</p>
      </Banner>
      <ImgCard/>         
    </main>
  )
}

export default App

import { View, StyleSheet, Text} from "react-native"
import ListarCursos from "../Components/ListarCursos";
import ListaAlunos from "../Components/ListaAlunos";
import ListaPessoas from "../Components/ListaPessoas";

export default function Prime() {
  return (
    <>
        <View style={estilos.topo}>
            <Text style={estilos.tituloHeader}>Cursos Senai</Text>
        </View>

        <ListaPessoas/>
    
        <View style={estilos.curso}>
            <Text style={estilos.textTitulo}>HTML completo</Text>
            <Text style={estilos.textTitulo}>Informatica basica</Text>
            <Text style={estilos.textTitulo}>Excel completo</Text>
            <Text style={estilos.textTitulo}>Logistica</Text>
            <Text style={estilos.textTitulo}>Legislação Trabalhista</Text>
            <Text style={estilos.textTitulo}>Recursos Humanos</Text>
            <Text style={estilos.textTitulo}>5S</Text>
            <Text style={estilos.textTitulo}>Power BI</Text>
            <Text style={estilos.textTitulo}>Autodesk inventor</Text>
        </View>
        <ListarCursos/>
        <ListaAlunos/>
    </>
  )
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 150,
    backgroundColor: "red",
  },
  tituloHeader: {
    width: "100%",
    color: "white",
    textAlign: "center",
    paddingTop: 60,
    fontSize: 20
  }, 
  curso: {
    width: "100%",
    backgroundColor: "#FFD700"
  },
  textTitulo: {
   color: "#00BFFF",
   textAlign: "center",
  }
});
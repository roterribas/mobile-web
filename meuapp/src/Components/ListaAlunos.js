import { Text, View, FlatList } from 'react-native';

export default function ListaAlunos() {
  const alunos = [
  "Rodrigo", "Juliana", "Paty", "Bruno", "Carlos", "Pedro", "João", "Maria",
  "Joana", "Katia", "Meire", "Malu", "Tatiane", "Beatriz", "Lucas", "Fernanda",
  "Marcos", "Camila", "Rafael", "Aline", "Gabriel", "Renata", "Vinícius", "Larissa",
  "Felipe", "Amanda", "Daniel", "Priscila", "Gustavo", "Patrícia", "Eduardo", "Isabela",
  "Leandro", "Bianca", "Thiago", "Sabrina", "Marcelo", "Vanessa", "André", "Carla",
  "Bruna", "Alexandre", "Daniela", "Henrique", "Carolina", "Vitor", "Raquel", "Fábio",
  "Sandra", "Célio", "Tatiana", "Diego", "Letícia", "Caio", "Monique", "Renan", "Eliane",
  "Rogério", "Aline", "Fernando", "Juliana", "Samuel", "Érica", "Rodrigo", "Natália",
  "Júlio", "Mariana", "Leila", "Cláudio", "Vanessa", "Tiago", "Simone", "Wesley", "Patrícia",
  "Matheus", "Gabriela", "Gustavo", "Marina", "Rafael", "Larissa", "Paulo", "Jéssica",
  "Alex", "Carolina", "Bruno", "Suelen", "Anderson", "Renata", "Felipe", "Thaís",
  "Victor", "Fabiana", "Lucas", "Mônica", "Marcelo", "Isabela", "Diego", "Bianca",
  "Rodrigo", "Camila", "Daniel", "Tatiane", "Carlos", "Amanda", "João", "Mariana"
];

// Função para embaralhar o array
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
  }
  return array;
}

// Usando a função
const alunosEmbaralhados = embaralhar(alunos);
console.log(alunosEmbaralhados);


  return (
    <View style={{ backgroundColor: '#6bae4fff', padding: 20, minHeight: 200 }}>
      <Text style={{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#0026ffff'
      }}>
        📋 Lista de Usuários 📋
      </Text>

      <FlatList
        data={alunos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#dc9f74ff',
            padding: 10,
            marginVertical: 6,
            borderRadius: 20,
            elevation: 3,
            shadowColor: '#ff0000ff',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 5
          }}>
            {/* Avatar redondo com a inicial */}
            <View style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              backgroundColor: '#00bfffff',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 12
            }}>
              <Text style={{ color: '#fbff07ff', fontSize: 18, fontWeight: 'bold' }}>
                {item[0]}
              </Text>
            </View>

            <Text style={{ fontSize: 25, color: '#555' }}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}




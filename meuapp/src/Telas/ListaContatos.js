import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  Dimensions, 
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Função para buscar contatos
  const listaContatos = async () => {
    setLoading(true);
    try {
      const resposta = await axios.get("http://10.0.2.2:3000/contatos");
      setContatos(resposta.data || []);
    } catch (error) {
      console.error("Erro ao buscar contatos", error);
      setContatos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listaContatos();
  }, []);

  const renderContato = ({ item }) => (
    <View style={contatoStyles.card}>
      <Text style={contatoStyles.nome}>{item.nome}</Text>
      <Text style={contatoStyles.telefone}>{item.telefone}</Text>
    </View>
  );

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text 
        style={[styles.title, { maxWidth: screenWidth - 40 }]} 
        numberOfLines={1} 
        ellipsizeMode="tail"
      >
        📞 Lista de Contatos
      </Text>

      {/* Conteúdo */}
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : contatos.length > 0 ? (
        <FlatList
          data={contatos}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          renderItem={renderContato}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <Text style={contatoStyles.emptyText}>Nenhum contato disponível</Text>
      )}

      {/* Botão igual do Sobre */}
      <View style={styles.actionArea}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Voltar para o Início</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

// Estilos gerais da tela
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#8080803d' },
  title: { fontSize: 24, fontWeight: '700', color: '#007BFF', marginBottom: 20, textAlign: 'center' },
  actionArea: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ff0000ff',
    alignItems: 'center',
  },
  button: { 
    backgroundColor: '#007BFF', 
    padding: 12, 
    borderRadius: 8, 
    alignItems: 'center', 
    width: '70%',
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold',
  },
});

// Estilos dos cards de contato
const contatoStyles = StyleSheet.create({
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    marginVertical: 6, 
    padding: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  nome: { fontSize: 16, fontWeight: '600', color: '#333' },
  telefone: { fontSize: 14, color: '#555', marginTop: 4 },
  emptyText: { textAlign: 'center', marginTop: 30, fontSize: 16, color: '#777' },
});

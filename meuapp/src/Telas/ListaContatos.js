import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'; // ✅ Import do ícone

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const listaContatos = () => {
    setLoading(true);
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        const dados = Array.isArray(resposta.data) ? resposta.data : resposta.data.contatos || [];
        const contatosOrdenados = dados.sort((a, b) => {
          const nomeA = (a.nome || '').toString().trim();
          const nomeB = (b.nome || '').toString().trim();
          return nomeA.localeCompare(nomeB, 'pt', { sensitivity: 'base' });
        });
        setContatos(contatosOrdenados);
      })
      .catch((error) => {
        console.error("❌ Erro ao buscar contatos", error);
        Alert.alert("Erro", "Não foi possível carregar os contatos.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deletarContato = (id) => {
    Alert.alert(
      "Excluir contato",
      "Tem certeza que deseja excluir este contato?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              await axios.delete(`http://10.0.2.2:3000/contatos/${id}`);
              Alert.alert("✅ Sucesso", "Contato excluído!");
              listaContatos(); // Atualiza a lista
            } catch (error) {
              console.error("❌ Erro ao excluir contato", error);
              Alert.alert("Erro", "Não foi possível excluir o contato.");
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  useEffect(() => {
    listaContatos();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="clip" adjustsFontSizeToFit>
          📇 Lista de Contatos
        </Text>
      </View>

      <View style={styles.refreshContainer}>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={listaContatos}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.refreshText}>🔄 Atualizar</Text>
          )}
        </TouchableOpacity>
      </View>

      {contatos.length > 0 ? (
        [...contatos]
          .sort((a, b) =>
            (a.nome || '').localeCompare((b.nome || ''), 'pt', { sensitivity: 'base' })
          )
          .map((contato, index) => (
            <View key={index} style={styles.card}>
              {contato.nome && (
                <Text style={styles.cardName} numberOfLines={1}>
                  {contato.nome}
                </Text>
              )}

              {Object.entries(contato).map(([campo, valor]) => {
                if (campo === 'id' || campo === 'nome') return null;

                const campoLower = campo.toLowerCase();
                let emoji = '';
                if (campoLower.includes('tel') || campoLower.includes('cel')) emoji = '📞';
                else if (campoLower.includes('email')) emoji = '📧';
                else if (campoLower.includes('endereco')) emoji = '📍';

                return (
                  <View key={campo} style={styles.dataRow}>
                    <Text style={styles.dataText}>
                      {emoji} {valor !== null && valor !== '' ? String(valor) : '—'}
                    </Text>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => deletarContato(contato.id)}
                    >
                      <Ionicons name="trash" size={30} color="#ff0000ff" /> {/* ✅ Ícone mais forte */}
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          ))
      ) : (
        <Text style={styles.empty}>Nenhum contato disponível</Text>
      )}

      <View style={styles.actionArea}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Voltar para o Início</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  header: {
    width: '100%',
    marginBottom: 5,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    width: '100%',
  },
  refreshContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  refreshButton: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: '#ff6600',
    borderRadius: 14,
  },
  refreshText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginVertical: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#ff6600',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 12,
    textAlign: 'center',
  },
  dataRow: {
    marginBottom: 10,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  dataText: {
    fontSize: 16,
    color: '#c50a0aff',
    textAlign: 'center',
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#ffffffff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    fontSize: 16,
    color: '#999',
    marginTop: 20,
    textAlign: 'center',
  },
  actionArea: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
    width: '100%',
  },
  homeButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

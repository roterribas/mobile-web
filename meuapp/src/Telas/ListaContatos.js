import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editandoId, setEditandoId] = useState(null);
  const [formEdicao, setFormEdicao] = useState({});
  const navigation = useNavigation();

  const listaContatos = () => {
    setLoading(true);
    axios
      .get("http://10.0.2.2:3000/contatos")
      .then((resposta) => {
        const dados = Array.isArray(resposta.data)
          ? resposta.data
          : resposta.data.contatos || [];
        const contatosOrdenados = dados.sort((a, b) =>
          (a.nome || '').localeCompare(b.nome || '', 'pt', { sensitivity: 'base' })
        );
        setContatos(contatosOrdenados);
      })
      .catch((error) => {
        console.error("❌ Erro ao buscar contatos", error);
        Alert.alert("Erro", "Não foi possível carregar os contatos.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    listaContatos();
  }, []);

  // 🗑️ Excluir contato
  const deletarContato = (id) => {
    Alert.alert("Excluir contato", "Tem certeza que deseja excluir este contato?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await axios.delete(`http://10.0.2.2:3000/contatos/${id}`);
            setContatos(contatos.filter((c) => c.id !== id));
            Alert.alert("✅ Sucesso", "Contato excluído com sucesso!");
          } catch (erro) {
            console.log("Erro ao excluir:", erro);
            Alert.alert("Erro", "Falha ao excluir o contato.");
          }
        },
      },
    ]);
  };

  // ✏️ Iniciar edição
  const iniciarEdicao = (contato) => {
    setEditandoId(contato.id);
    setFormEdicao({ ...contato });
  };

  // 💾 Salvar alterações
  const salvarEdicao = async () => {
    try {
      await axios.put(`http://10.0.2.2:3000/contatos/${formEdicao.id}`, formEdicao);
      setContatos(
        contatos.map((c) => (c.id === formEdicao.id ? formEdicao : c))
      );
      setEditandoId(null);
      Alert.alert("✅ Sucesso", "Contato atualizado com sucesso!");
    } catch (erro) {
      console.log("Erro ao salvar:", erro);
      Alert.alert("Erro", "Falha ao atualizar o contato.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📇 Lista de Contatos</Text>
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
        contatos.map((contato) => (
          <View key={contato.id} style={styles.card}>
            {editandoId === contato.id ? (
              <>
                <TextInput
                  style={styles.input}
                  value={formEdicao.nome}
                  onChangeText={(t) => setFormEdicao({ ...formEdicao, nome: t })}
                  placeholder="Nome"
                />
                <TextInput
                  style={styles.input}
                  value={formEdicao.telefone}
                  onChangeText={(t) => setFormEdicao({ ...formEdicao, telefone: t })}
                  placeholder="Telefone"
                />
                <TextInput
                  style={styles.input}
                  value={formEdicao.email}
                  onChangeText={(t) => setFormEdicao({ ...formEdicao, email: t })}
                  placeholder="Email"
                />

                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.saveButton} onPress={salvarEdicao}>
                    <Text style={styles.actionText}>💾 Salvar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setEditandoId(null)}
                  >
                    <Text style={styles.actionText}>❌ Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.cardName}>{contato.nome}</Text>
                <Text style={styles.dataText}>📞 {contato.telefone}</Text>
                <Text style={styles.dataText}>📧 {contato.email}</Text>

                {/* Botões lado a lado */}
                <View style={styles.horizontalButtons}>
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => iniciarEdicao(contato)}
                  >
                    <Ionicons name="create-outline" size={24} color="#007AFF" />
                    <Text style={styles.btnLabel}>Alterar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => deletarContato(contato.id)}
                  >
                    <Ionicons name="trash" size={24} color="#ff0000" />
                    <Text style={styles.btnLabel}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
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
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginVertical: 10,
    borderLeftWidth: 6,
    borderLeftColor: '#ff6600',
    elevation: 5,
  },
  cardName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    textAlign: 'center',
    marginBottom: 12,
  },
  dataText: {
    fontSize: 16,
    color: '#c50a0aff',
    textAlign: 'center',
    marginBottom: 5,
  },
  horizontalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
    marginTop: 10,
  },
  editButton: {
    alignItems: 'center',
  },
  deleteButton: {
    alignItems: 'center',
  },
  btnLabel: {
    fontSize: 12,
    color: '#333',
    marginTop: 2,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#ff000080',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 20,
  },
  actionArea: {
    marginTop: 30,
    alignItems: 'center',
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

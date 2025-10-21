import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const listaContatos = () => {
    setLoading(true);
    axios
      .get("http://10.212.227.46:3000/contatos")
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
      })
      .finally(() => {
        setLoading(false);
      });
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

      {/* 🟡 Botão de atualizar menor */}
      <View style={styles.refreshContainer}>
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={listaContatos}
          disabled={loading}
        >
          <Text style={styles.refreshText}>
            {loading ? '⏳ Atualizando...' : '🔄 Atualizar'}
          </Text>
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
                    <Button
                      title='Excluir'
                      onPress={() => Alert.alert('Aviso', 'VOCÊ CLICOU NO BOTÃO')}
                    />
                  </View>
                );
              })}
            </View>
          ))
      ) : (
        <Text style={styles.empty}>Nenhum contato disponível</Text>
      )}

      <View style={styles.actionArea}>
        <Button
          title="Voltar para o Início"
          onPress={() => navigation.navigate('Home')}
          color="#333333"
        />
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
    marginBottom: 25, // ⬅️ mais espaço abaixo do título
  },
  refreshButton: {
    paddingVertical: 5,  // 🔸 menor altura
    paddingHorizontal: 14, // 🔸 menor largura
    backgroundColor: '#ff6600',
    borderRadius: 14, // 🔸 mais delicado
  },
  refreshText: {
    color: '#fff',
    fontSize: 13,  // 🔸 menor fonte
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
  },
  dataText: {
    fontSize: 16,
    color: '#c50a0aff',
    textAlign: 'center',
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
});

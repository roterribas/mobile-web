import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Contato() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarContato = async () => {
    if (!nome || !telefone) {
      Alert.alert("⚠️ Erro", "Por favor, preencha todos os campos!");
      return;
    }

    setLoading(true);

    try {
      // Buscar todos os contatos para calcular próximo ID de forma segura
      const respostaGet = await axios.get('http://10.0.2.2:3000/contatos');
      const contatos = respostaGet.data || [];

      // Filtrar apenas IDs numéricos válidos
      const idsNumericos = contatos
        .map(c => parseInt(c.id))
        .filter(id => !isNaN(id));

      // Calcular o próximo ID corretamente
      const ultimoID = idsNumericos.length > 0 ? Math.max(...idsNumericos) : 0;
      const novoID = ultimoID + 1;

      // ✅ Enviar ID como string para evitar problemas de exclusão
      const novoContato = { id: String(novoID), nome, telefone };

      // Enviar novo contato
      const respostaPost = await axios.post('http://10.0.2.2:3000/contatos', novoContato);
      setLoading(false);

      if (respostaPost.status === 201) {
        Alert.alert("✅ Sucesso", "Contato cadastrado com sucesso!");
        setNome('');
        setTelefone('');
        navigation.navigate('ListaContatos');
      } else {
        Alert.alert("❌ Erro", "Não foi possível cadastrar o contato.");
      }
    } catch (erro) {
      setLoading(false);
      console.log("Erro completo:", erro);
      Alert.alert("🌐 Erro de Conexão", "Falha ao conectar com o servidor.");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.titulo}
        adjustsFontSizeToFit={true}
        minimumFontScale={0.6}
        allowFontScaling={true}
      >
        📋 Cadastro de Contato
      </Text>
      <Text
        style={styles.subtitulo}
        adjustsFontSizeToFit={true}
        minimumFontScale={0.6}
        allowFontScaling={true}
      >
        ✏️ Preencha as informações abaixo:
      </Text>

      <View style={styles.form}>
        <Text style={styles.label}>👤 Nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome completo"
          placeholderTextColor="#666"
        />

        <Text style={styles.label}>📱 Telefone:</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite o telefone"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.botaoCadastrar} onPress={enviarContato} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.textoBotao}>Cadastrar</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.actionArea}>
        <TouchableOpacity
          style={[styles.botaoFinal, { backgroundColor: '#333' }]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotaoFinal} numberOfLines={1}>
            🏠 Voltar para o Início
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botaoFinal, { backgroundColor: '#004080' }]}
          onPress={() => navigation.navigate('ListaContatos')}
        >
          <Text style={styles.textoBotaoFinal} numberOfLines={1}>
            📞 Lista de Contatos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004080',
    textAlign: 'center',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  form: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#004080',
  },
  input: {
    borderWidth: 1,
    borderColor: '#b3c6ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#f5f8ff',
  },
  botaoCadastrar: {
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  actionArea: {
    width: '100%',
    alignItems: 'center',
  },
  botaoFinal: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  textoBotaoFinal: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

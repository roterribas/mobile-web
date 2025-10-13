import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';

// Ativa a animação no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Faq() {
  const [aberto, setAberto] = useState(null);

  const perguntas = [
    { id: 1, pergunta: 'Como faço login?', resposta: 'Você pode fazer login usando seu e-mail e senha cadastrados.' },
    { id: 2, pergunta: 'Esqueci minha senha, e agora?', resposta: 'Clique em “Esqueci minha senha” e siga as instruções para recuperar.' },
    { id: 3, pergunta: 'Posso alterar meus dados?', resposta: 'Sim! Vá até a aba de perfil e clique em “Editar informações”.' },
    { id: 4, pergunta: 'Como falo com o suporte?', resposta: 'Você pode entrar em contato pelo e-mail suporte@exemplo.com ou pelo chat no app.' },
  ];

  const alternar = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setAberto(aberto === id ? null : id);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>📖 FAQ - Perguntas Frequentes</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {perguntas.map(item => (
          <View key={item.id} style={estilos.card}>
            <TouchableOpacity onPress={() => alternar(item.id)}>
              <Text style={estilos.pergunta}>
                {item.pergunta} {aberto === item.id ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>
            {aberto === item.id && (
              <Text style={estilos.resposta}>{item.resposta}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  resposta: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
  },
});

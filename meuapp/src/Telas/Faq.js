// Arquivo: src/Telas/Faq.js - VERSÃO COM ESTILO MELHORADO

import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Usaremos ícones para botões e visual

// Dados de exemplo (Para simular o conteúdo real de um FAQ)
const faqData = [
  { 
    id: 1, 
    question: "Qual o prazo de entrega dos pedidos?", 
    answer: "O prazo padrão é de 5 a 7 dias úteis após a confirmação do pagamento, dependendo da região." 
  },
  { 
    id: 2, 
    question: "Como posso rastrear meu pedido?", 
    answer: "Você receberá um código de rastreio por e-mail em até 48h após o envio. Use o link fornecido para acompanhar." 
  },
  { 
    id: 3, 
    question: "Posso solicitar reembolso?", 
    answer: "Reembolsos são processados em até 30 dias após o recebimento do item devolvido. Consulte a nossa política de devolução." 
  },
];

// Componente para um item de FAQ (melhora a organização visual)
function FaqItem({ question, answer }) {
    return (
        <View style={faqStyles.itemContainer}>
            <View style={faqStyles.questionBar}>
                <Ionicons name="chatbox-ellipses-outline" size={20} color="#0080ffff" style={{ marginRight: 10 }} />
                <Text style={faqStyles.questionText}>{question}</Text>
            </View>
            <View style={faqStyles.answerBox}>
                <Text style={faqStyles.answerText}>{answer}</Text>
            </View>
        </View>
    );
}


export default function Faq() {
  const navigation = useNavigation();

  return (
    // Usa ScrollView para que o conteúdo possa rolar se for maior que a tela
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        
        <Text style={styles.headerTitle}>Central de Ajuda</Text>
        <Text style={styles.subHeader}>Encontre respostas para suas dúvidas</Text>

        {/* Renderiza a lista de itens do FAQ */}
        {faqData.map(item => (
            <FaqItem 
                key={item.id} 
                question={item.question} 
                answer={item.answer} 
            />
        ))}

        {/* Área de Navegação/Ação */}
        <View style={styles.actionArea}>
            <Text style={styles.actionText}>Não encontrou a resposta?</Text>
            <Button
                title="Voltar para o Início"
                onPress={() => navigation.navigate('Home')} 
                color="#333333" // Cor escura para contraste
            />
            {/* Exemplo de outro botão de navegação, se necessário */}
             <Button
                title="Sobre o Aplicativo"
                onPress={() => navigation.navigate('Sobre')} 
                color="#d03333cf"
            />
        </View>
      </View>
    </ScrollView>
  );
}

// Estilos globais para a tela
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#8080803d',
  },
  container: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginBottom: 5,
    marginTop: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#060606ed',
    marginBottom: 25,
  },
  actionArea: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ff0000ff',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  }
});

// Estilos específicos para os itens do FAQ
const faqStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    marginVertical: 8,
    overflow: 'hidden',
    shadowColor: '#000000ff', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  questionBar: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff7700cf',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeeeff',
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  answerBox: {
    padding: 15,
    backgroundColor: '#cf3d3dff',
  },
  answerText: {
    fontSize: 14,
    color: '#edb05bff',
    lineHeight: 20,
  }
});
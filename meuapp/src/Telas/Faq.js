import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

// Habilita animação no Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Componente para cada item de FAQ
function FaqItem({ question, answer, isBD = false }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[faqStyles.itemContainer, isBD && faqStyles.bdItemContainer]}>
      <TouchableOpacity
        style={[faqStyles.questionBar, isBD && faqStyles.bdQuestionBar]}
        onPress={toggleExpand}
      >
        <Ionicons
          name={expanded ? "chevron-up-outline" : "chevron-down-outline"}
          size={20}
          color={isBD ? "#ffffff" : "#0080ffff"}
          style={{ marginRight: 10 }}
        />
        <Text style={[faqStyles.questionText, isBD && faqStyles.bdQuestionText]}>{question}</Text>
      </TouchableOpacity>
      {expanded && (
        <View style={[faqStyles.answerBox, isBD && faqStyles.bdAnswerBox]}>
          <Text style={[faqStyles.answerText, isBD && faqStyles.bdAnswerText]}>{answer}</Text>
        </View>
      )}
    </View>
  );
}

export default function Faq() {
  const navigation = useNavigation();
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Buscar FAQ do servidor
  const fetchFaq = () => {
    setLoading(true);
    axios.get('http://10.212.227.46:3000/faq')
      .then(res => {
        const dados = Array.isArray(res.data) ? res.data : res.data.faq || [];
        const dadosOrdenados = dados.sort((a, b) =>
          (a.pergunta || '').toLowerCase().localeCompare((b.pergunta || '').toLowerCase(), 'pt', { sensitivity: 'base' })
        );
        setFaqData(dadosOrdenados);
      })
      .catch(err => console.error('Erro ao buscar FAQ:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Título e subtítulo centralizados */}
        <Text style={styles.headerTitle}>Central de Ajuda</Text>
        <Text style={styles.subHeader}>Encontre respostas para suas dúvidas de forma rápida e prática</Text>

        {/* Botão de atualizar FAQ */}
        <View style={styles.refreshContainer}>
          <TouchableOpacity style={styles.refreshButton} onPress={fetchFaq} disabled={loading}>
            <Text style={styles.refreshText}>{loading ? '⏳ Atualizando...' : '🔄 Atualizar FAQ'}</Text>
          </TouchableOpacity>
        </View>

        {/* Mensagens de loading / vazio */}
        {loading && <Text style={styles.loadingText}>⏳ Carregando FAQ...</Text>}
        {!loading && faqData.length === 0 && <Text style={styles.emptyText}>Nenhuma pergunta disponível.</Text>}

        {/* Renderiza perguntas do BD com destaque */}
        {faqData.map(item => (
          <FaqItem
            key={item.id}
            question={item.pergunta}
            answer={item.resposta}
            isBD={true} // marca como vindo do BD
          />
        ))}

        {/* Conteúdo estático antigo */}
        <FaqItem question="Qual o prazo de entrega dos pedidos?" answer="O prazo padrão é de 5 a 7 dias úteis após a confirmação do pagamento, dependendo da região." />
        <FaqItem question="Como posso rastrear meu pedido?" answer="Você receberá um código de rastreio por e-mail em até 48h após o envio. Use o link fornecido para acompanhar." />
        <FaqItem question="Posso solicitar reembolso?" answer="Reembolsos são processados em até 30 dias após o recebimento do item devolvido. Consulte a nossa política de devolução." />

        {/* Área de navegação/ação */}
        <View style={styles.actionArea}>
          <Text style={styles.actionText}>Não encontrou a resposta?</Text>
          <Button title="Voltar para o Início" onPress={() => navigation.navigate('Home')} color="#333333" />
          <Button title="Sobre o Aplicativo" onPress={() => navigation.navigate('Sobre')} color="#d03333cf" />
        </View>
      </View>
    </ScrollView>
  );
}

// Estilos globais
const styles = StyleSheet.create({
  scrollContainer: { flex: 1, backgroundColor: '#8080803d' },
  container: { padding: 20 },
  headerTitle: { fontSize: 30, fontWeight: '700', color: '#000', marginBottom: 5, marginTop: 10, textAlign: 'center' },
  subHeader: { fontSize: 10, color: '#333333', marginBottom: 25, textAlign: 'center', lineHeight: 22 },
  refreshContainer: { alignItems: 'center', marginBottom: 20 },
  refreshButton: { paddingVertical: 5, paddingHorizontal: 14, backgroundColor: '#ff6600', borderRadius: 14 },
  refreshText: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  loadingText: { textAlign: 'center', fontSize: 16, marginVertical: 10, color: '#555' },
  emptyText: { textAlign: 'center', fontSize: 16, marginVertical: 10, color: '#999' },
  actionArea: { marginTop: 40, paddingTop: 20, borderTopWidth: 1, borderTopColor: '#ff0000ff', alignItems: 'center' },
  actionText: { fontSize: 16, color: '#555', marginBottom: 15 }
});

// Estilos específicos para itens de FAQ
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
  questionText: { fontSize: 16, fontWeight: '600', color: '#333', flexShrink: 1 },
  answerBox: { padding: 15, backgroundColor: '#cf3d3dff' },
  answerText: { fontSize: 14, color: '#edb05bff', lineHeight: 20 },

  // Estilos diferenciados para itens do BD
  bdItemContainer: { borderWidth: 1, borderColor: '#ff6600', shadowOpacity: 0.15 },
  bdQuestionBar: { backgroundColor: '#ff6600' },
  bdQuestionText: { color: '#fff', fontWeight: '700' },
  bdAnswerBox: { backgroundColor: '#ffdab3' },
  bdAnswerText: { color: '#333', fontWeight: '500' }
});

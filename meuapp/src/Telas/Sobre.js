import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";

export default function Sobre() {
  const navigation = useNavigation();

  const info = {
    nomeApp: "RODRIGÃO",
    versao: "1.0.0",
    desenvolvedor: "Rodrigo Terribas Saraiva"
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre</Text>

        <Image source={Image1} style={styles.image} />
        <View style={styles.line} />
        <Image source={Image2} style={styles.image} />

        <Text style={styles.titulo}>Informações do App</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoValue}>{info.nomeApp}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Versão:</Text>
          <Text style={styles.infoValue}>{info.versao}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Desenvolvedor:</Text>
          <Text
            style={styles.infoValue}
            numberOfLines={1}
            ellipsizeMode="tail"
            adjustsFontSizeToFit={true}
            minimumFontScale={0.8}
          >
            {info.desenvolvedor}
          </Text>
        </View>
      </View>

      {/* Botão com espaçamento maior */}
      <View style={styles.actionArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Voltar para o Início</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 80, // 👈 garante espaço no final do scroll
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    borderColor: 'orange',
    borderWidth: 2,
    resizeMode: 'cover',
  },
  line: {
    width: "80%",
    height: 1,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginVertical: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    marginVertical: 8,
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
  },
  actionArea: {
    marginTop: 40,      // 👈 mais espaço acima
    marginBottom: 40,   // 👈 mais espaço abaixo
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ff0000ff',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#001f99',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

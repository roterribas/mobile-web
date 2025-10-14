import React from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image1 from "../../assets/img-1.jpg";
import Image2 from "../../assets/img-2.jpg";

export default function Sobre() {
  const navigation = useNavigation();

  const info = {
    nomeApp: "Fut Popeto",
    versao: "1.0.0",
    desenvolvedor: "Rodrigo Terribas Saraiva"
  };

  return (
    <ScrollView>
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
          <Text style={styles.infoValue}>{info.desenvolvedor}</Text>
        </View>
      </View>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',         // controla a largura das linhas
    marginVertical: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    textAlign: 'right',
    flexShrink: 1,
  },
  actionArea: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ff0000ff',
    alignItems: 'center',
  }
});

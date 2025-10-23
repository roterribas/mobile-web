import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardContent}>{props.content}</Text>

      {/* Botão estilizado */}
      <TouchableOpacity style={styles.button} onPress={props.OnPress}>
        <Text style={styles.buttonText}>{props.textButton}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dc1313b1",
    borderRadius: 12, // aumentei para deixar mais arredondado
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    padding: 20,
    margin: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  cardContent: {
    fontSize: 14,
    marginBottom: 15,
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(13, 66, 170, 1)",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#ff7300ff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

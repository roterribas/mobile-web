import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Contato() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');

    const enviarContato = async () => {
        if (!nome || !Telefone) {
            Alert.alert("ERRO, POR FAVOR, PREENCHER TODOS OS CAMPOS!");
            return;
        }

        const novoContato = {nome, Telefone};
        axios.post('http://10.212.227.46:3000/contatos', novoContato)
    }

    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} value={nome} onChange={setNome} placeholder='DIGITE O NOME: ' />
            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} value={Telefone} onChange={setTelefone} placeholder='DIGITE O TELEFONE: ' />

            <Button title='CADASTRAR' onPress={enviarContato} />

            {/* 🔽 Botão igual ao do "Sobre" */}
            <View style={styles.actionArea}>
                <Button
                    title="Voltar para o Início"
                    onPress={() => navigation.navigate('Home')}
                    color="#333333"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    actionArea: {
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ff0000ff',
        alignItems: 'center',
        width: '100%',
    },
    label: {
        fontSize: 10,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#487c9875'
    }

});

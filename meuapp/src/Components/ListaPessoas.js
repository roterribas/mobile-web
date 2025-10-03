import { Text, View } from 'react-native'

export default function ListaPessoas() {
    const pessoas = [
        {
            id: 1,
            nome:"Juliana",
            idade: 20,
        },
        {
            id: 2,
            nome:"Caio",
            idade: 40,
        },
        {
            id: 30,
            nome:"Edu",
            idade: 18,
        },
        {
            id: 15,
            nome:"Gabs",
            idade: 58,
        }
    ]
  return (
    <View>
        <Text>ListaPessoas</Text>
    </View>
  )
}

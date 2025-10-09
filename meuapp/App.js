import { Text, ScrollView } from 'react-native';
import Header from './src/Components/Header';
import Card from './src/Components/Card';


export default function App() {
  return (
    <>
      <ScrollView>
        <Header/>
        <Card/>
      </ScrollView>
    </>

  );
}



import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Olá, Bem Vindo!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Amostra Água')}>
        <Text>Amostra Água</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Criar Relatório')}>
        <Text>Criar Relatorio</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Relatórios')}>
        <Text>Relatórios</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sobre Nós')}>
        <Text>Sobre nós</Text>
      </TouchableOpacity>

      <Text>© 2024 SeaMI, Inc.</Text>
    </View>
  );
};

export default Home;

import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.title}>Olá, Bem Vindo!</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Amostra Água')} style={style.button}>
        <Text style={style.text}>Amostra Água</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Criar Relatório')} style={style.button}>
        <Text style={style.text}>Criar Relatorio</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Relatórios')} style={style.button}>
        <Text style={style.text}>Relatórios</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Sobre Nós')} style={style.button}>
        <Text style={style.text}>Sobre nós</Text>
      </TouchableOpacity>

      <Text style={{marginTop: '2rem',color: '#FBFBFB', marginBottom: '6rem'}}>© 2024 SeaMI, Inc.</Text>
    </View>
  );
};

export default Home;

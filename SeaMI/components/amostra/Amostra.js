import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import Erro from '../erro/Erro';
import axios from 'axios';
import { style } from '../criarRelatorio/style';

const Amostra = () => {
  const [amostra, setAmostra] = useState([]);
  const [erro, setErro] = useState(false);

  const mostrarAmostras = () => {
    axios.get('http://localhost:8080/amostras-agua')
    .then(response => {
      setAmostra(response.data);
      setErro(false);
    })
    .catch(error => {
      console.error('Erro ao obter lista de amostras:', error);
      setErro(true);
    });
  };

  useEffect(() => {
    mostrarAmostras();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ width: '20rem', marginBottom: '1rem', backgroundColor:"#fbfbfb", display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontWeight: '600'}}>Amostra</Text>
      <Text>Data: {item.dataCriacao}</Text>
      <Text>Ph: {item.ph}</Text>
      <Text>Poluentes Quimicos: {item.poluentesQuimicos}</Text>
      <Text>Nutrientes: {item.nutrientes}</Text>
      <Text>Plástico: {item.plastico}</Text>
      <Text>Oxigienio Dissolvido: {item.oxigenioDissolvido}</Text>
      <Text>temperatura: {item.temperatura}</Text>
      <Text>turbidez: {item.turbidez}</Text>
    </View>
  );

  return (
    <View>
      {erro ? (
        <Erro/>
      ) : (
        <FlatList
          data={amostra}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Amostra;

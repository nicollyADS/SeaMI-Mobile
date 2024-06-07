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
    <View style={{ width: '100%',  marginTop: '1rem', color:"#fbfbfb", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", backgroundColor: "#05273A"}}>
      <Text style={{fontWeight: '600', color:"#fbfbfb",}}>Amostra</Text>
      <Text style={{ color:"#fbfbfb",}}>Data: {item.dataCriacao}</Text>
      <Text style={{ color:"#fbfbfb",}}>Ph: {item.ph}</Text>
      <Text style={{ color:"#fbfbfb",}}>Poluentes Quimicos: {item.poluentesQuimicos}</Text>
      <Text style={{ color:"#fbfbfb",}}>Nutrientes: {item.nutrientes}</Text>
      <Text style={{ color:"#fbfbfb",}}>Plástico: {item.plastico}</Text>
      <Text style={{ color:"#fbfbfb",}}>Oxigienio Dissolvido: {item.oxigenioDissolvido}</Text>
      <Text style={{ color:"#fbfbfb",}}>temperatura: {item.temperatura}</Text>
      <Text style={{ color:"#fbfbfb",}}>turbidez: {item.turbidez}</Text>
    </View>
  );

  return (
    <View style={{height: '100vh', backgroundColor: '#05273A'}}>
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

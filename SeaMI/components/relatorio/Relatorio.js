import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Error from '../../assets/images/error.png'
import Erro from '../erro/Erro.js';
import axios from 'axios';

const Relatorio = () => {
  const [relatorios, setRelatorios] = useState([]);
  const [relatorioEditar, setRelatorioEditar] = useState(null);

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [erro, setErro] = useState(false);


  const mostrarRelatorios = () => {
    axios.get('http://localhost:8080/relatorios')
    .then(response => {
      setRelatorios(response.data);
      setErro(false);
    })
    .catch(error => {
      console.error('Erro ao obter lista de relatórios:', error);
      setErro(true);
    });

  };

  useEffect(() => {
    mostrarRelatorios();
  }, []);


  const excluirRelatorio = (id) => {
    axios.delete(`http://localhost:8080/relatorios/${id}`)
    .then(response => {
      if (response.status === 204) {
        setRelatorios(relatorios.filter(item => item.id !== id));
        console.log('Relatório excluído com sucesso!');
      } else {
        console.error('Erro ao excluir relatório. Status:', response.status);
      }
    })
    .catch(error => {
      console.error('Erro ao excluir relatório:', error);
    });
  };
  

  const mostrarRelatorioPorId = (id) => {
    axios.get(`http://localhost:8080/relatorios/${id}`)
    .then(response => {
      if (response.status === 200) {
        const data = response.data;
        setRelatorioEditar(data.id);
        setNome(data.nome);
        setDescricao(data.descricao);
        setModalVisible(true);
      } else {
        throw new Error('Erro ao obter detalhes do relatório');
      }
    })
    .catch(error => console.error('Erro ao carregar detalhes do relatório:', error));
  };

  const atualizarRelatorio = () => {
    const dadosFormulario = {
      nome,
      descricao,
    };
  
    axios.put(`http://localhost:8080/relatorios/${relatorioEditar}`, dadosFormulario, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log('Relatório atualizado com sucesso!');
          setModalVisible(false);
          mostrarRelatorios();
        } else {
          console.error('Erro ao atualizar relatório:', response.statusText);
        }
      })
      .catch(error => console.error('Erro ao atualizar relatório:', error));
  };

  const renderItem = ({ item }) => (
    <View>
      <View>
        <Text>Relatorio</Text>
        <Text>Dias: {item.nome}</Text>
        <Text>Hábito: {item.descricao}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => excluirRelatorio(item.id)}>
          <Text>Excluir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => mostrarRelatorioPorId(item.id)}>
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <View>
      {erro ? (
        <Erro/>
      ) : (
        <FlatList
          data={relatorios}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}

      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View>
          <View>
          
            <Text >Editar Relatório</Text>
            <View>
              <Text>Nome</Text>
              <TextInput
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
              />
            </View>
            <View>
              <Text>Descricao</Text>
              <TextInput
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
              />
            </View>
    
             <TouchableOpacity onPress={atualizarRelatorio}>
              <Text>Atualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Relatorio;

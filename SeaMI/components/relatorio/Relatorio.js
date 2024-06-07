import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import Error from '../../assets/images/error.png'
import Erro from '../erro/Erro.js';
import axios from 'axios';
import { style } from '../criarRelatorio/style';

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
    <View style={{ width: '100%',  marginTop: '1rem', color:"#fbfbfb", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", backgroundColor: "#05273A"}}>
      <View style={{height: "5rem", width: '70%',}}>
        <Text style={{fontWeight: '600', color:"#fbfbfb",}}>Relatorio</Text>
        <Text style={{ color:"#fbfbfb",}}>Nome: {item.nome}</Text>
        <Text style={{ color:"#fbfbfb",}}>Descrição: {item.descricao}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => excluirRelatorio(item.id)}>
          <Text  style={{fontWeight: 'bolder', marginTop: '0.5rem', fontSize: '0.8rem', color: 'red'}}>Excluir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => mostrarRelatorioPorId(item.id)}>
          <Text style={{fontWeight: 'bolder', marginTop: '0.5rem', fontSize: '0.8rem', color: '#00D2DF'} }>Editar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <View style={{height: '100vh', backgroundColor: '#05273A'}}>
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
          <View  style={style.container}>
          
            <Text style={{fontWeight: '600', marginTop: '1rem', fontSize: '2rem'}}>Editar Relatório</Text>
            <View style={style.inputLabel}>
              <Text style={style.label}>Nome</Text>
              <TextInput style={style.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
              />
            </View>
            <View style={style.inputLabel}>
              <Text style={style.label}>Descricao</Text>
              <TextInput style={style.input}
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
              />
            </View>
    
             <TouchableOpacity style={style.button} onPress={atualizarRelatorio}>
              <Text style={style.text}>Atualizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Relatorio;

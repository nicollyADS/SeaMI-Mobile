import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import SucessoRelatorio from './SucessoRelatorio';
import axios from 'axios';
import { style } from './style';

const schema = yup.object().shape({
  nome: yup.string().required('campo obrigatório.'),
  descricao: yup.string().required('campo obrigatório.'),
});

const CriarRelatorio = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await schema.validate({
        nome,
        descricao,
      }, { abortEarly: false });

      
      const dadosFormulario = { nome, descricao };
      await cadastrarRelatorio(dadosFormulario);
      setModalVisible(true);
      setNome('');
      setDescricao('');
    } catch (error) {
     
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const cadastrarRelatorio = async (dadosFormulario) => {
    try {
      const response = await axios.post('http://localhost:8080/relatorios', dadosFormulario, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.status === 200) {
        throw new Error('Erro ao enviar os dados do relatório');
      }
  
      return response.data;
    } catch (error) {
      console.error('Erro ao cadastrar relatório:', error);
      throw error;
    }
  };

  return (
    <View style={style.container}>
      <View>
        <Text style={style.label}>Nome</Text>
        <TextInput
          style={style.input}
          placeholder='Informe o nome do relatório'
          value={nome}
          onChangeText={setNome}
        />
        {errors.nome && <Text style={{ color: '#fbfbfb',}} >{errors.nome}</Text>}
      </View>

      <View>
        <Text style={style.label}>Descricao</Text>
        <TextInput
          style={style.inputD}
          placeholder='Faça uma descrição detalhada do relatório'
          value={descricao}
          onChangeText={setDescricao}
        />
        {errors.descricao && <Text style={{ color: '#fbfbfb',}}>{errors.descricao}</Text>}
      </View>


      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={style.text}>Criar</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.container}>
          <SucessoRelatorio/>

          <TouchableOpacity style={style.buttonI} onPress={() => {
            navigation.navigate("Home");
            setModalVisible(false)
          }}>
            <Text style={style.text}>Voltar para a tela inicial</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.buttonA} onPress={() => {
            navigation.navigate("Relatórios");
            setModalVisible(false)
          }}>
            <Text style={style.text}>Ir para meus relatórios</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </View>
  );
};

export default CriarRelatorio;

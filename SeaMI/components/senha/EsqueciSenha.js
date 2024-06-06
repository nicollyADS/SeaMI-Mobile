import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import SucessoSenha from './SucessoSenha';

const EsqueciSenha = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [modalSucessoVisible, setModalSucessoVisible] = useState(false);
  const [id, setId] = useState(null);

  const informarEmail = () => {
    if (!email) {
      setErroEmail('Por favor, informe o Email');
      return;
    }

    fetch("http://localhost:8080/logins")
      .then(response => response.json())
      .then(data => {
        const loginEncontrado = data.find(login => login.email === email);
        if (!loginEncontrado) {
          setErroEmail('Email Inválido');
        } else {
          setId(loginEncontrado.id);
          atualizarSenha(loginEncontrado.id);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar lista de logins:', error);
        setErroEmail('Por favor, tente novamente mais tarde.');
      });
  };

  const abrirModalSucesso = () => {
    setModalSucessoVisible(true);
  };

  const fecharModalSucesso = () => {
    setModalSucessoVisible(false);
  };

  const atualizarSenha = (id) => {
    fetch(`http://localhost:8080/logins/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, senha: senha }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao atualizar a senha');
      }
      return response.json();
    })
    .then(data => {
      abrirModalSucesso();
    })
    .catch(error => {
      console.error('Erro ao atualizar a senha:', error);
    });
  };

  return (
    <View>
      <Text>SeaMI</Text>
      <Text>Esqueci minha senha?</Text>
      <View>
        <Text>Informe o email para criar uma nova senha</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          inputMode="keyboard"
        />
      </View>

      {erroEmail ? <Text>{erroEmail}</Text> : null}
      <View>
        <Text>Informe a nova senha. </Text>
        <TextInput
          value={senha}
          onChangeText={text => setSenha(text)}
          inputMode="keyboard"
        />
      </View>

      <TouchableOpacity onPress={() => informarEmail()}>
        <Text>Alterar</Text>
      </TouchableOpacity>
      <Modal
        visible={modalSucessoVisible}
        onRequestClose={fecharModalSucesso}
      >
        <View>
          <SucessoSenha fecharModalSucesso={fecharModalSucesso} />
        </View>
      </Modal>
    </View>
  );
};

export default EsqueciSenha;

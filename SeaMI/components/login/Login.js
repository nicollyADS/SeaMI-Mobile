import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import EsqueciSenha from '../senha/EsqueciSenha'
import axios from 'axios';

const Login = ({ logar }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modalEsqueciSenhaVisible, setModalEsqueciSenhaVisible] = useState(false);
  const [erroLogin, setErroLogin] = useState("");


  const abrirModalEsqueciSenha = () => {
    setModalEsqueciSenhaVisible(true);
  };

  const fecharModalEsqueciSenha = () => {
    setModalEsqueciSenhaVisible(false);
  };

  const handleLogin = () => {
    if (email && senha) {
      axios.get('http://localhost:8080/logins')
        .then(response => {
          const data = response.data;
          const loginEncontrado = data.find(login => login.email === email && login.senha === senha);
          if (loginEncontrado) {
            console.log("Login encontrado");
            logar();
          } else {
            setErroLogin("Email ou senha inválidos");
          }
        })
        .catch(error => {
          console.error('Erro ao buscar lista de logins:', error);
          setErroLogin('Ocorreu um erro ao realizar o login. Por favor, tente novamente mais tarde.');
        });
    }
  };

  return (
    <View>
      <Text>SeaMI</Text>

      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={setEmail} />
      </View>

      <View>
        <Text>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <Text>{erroLogin}</Text>
      <TouchableOpacity onPress={abrirModalEsqueciSenha}>
        <Text>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalEsqueciSenhaVisible}
        onRequestClose={fecharModalEsqueciSenha}
      >
        <View>
          <EsqueciSenha fecharModalEsqueciSenha={fecharModalEsqueciSenha} />
        </View>
      </Modal>
    </View>
  )
}

export default Login;

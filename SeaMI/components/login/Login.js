import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import EsqueciSenha from '../senha/EsqueciSenha'
import { style } from './style';
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
    <View style={style.container}>
      <View style={{ display:'flex', alignItems: "center", flexDirection: "row",marginBottom: '5rem', marginTop: '5rem',}}
      ><Text style={style.title}>Sea</Text><Text style={style.title2}>MI</Text></View>
      

      <View >
        <Text style={style.text}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={style.input}/>
      </View>

      <View>
        <Text style={style.text}>Senha</Text>
        <TextInput value={senha} onChangeText={setSenha} secureTextEntry={true} style={style.input}/>
      </View>

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={{ color: '#fbfbfb', fontSize: "1rem", fontWeight: '600' }}
        >Entrar</Text>
      </TouchableOpacity>

      <Text>{erroLogin}</Text>
      <TouchableOpacity onPress={abrirModalEsqueciSenha}>
        <Text style={{ color: '#fbfbfb', fontSize: "0.9rem", fontWeight: '600', marginTop: '1rem', textDecorationLine: 'underline' }}>
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

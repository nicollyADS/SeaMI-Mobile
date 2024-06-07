import { View, Text } from 'react-native'
import React from 'react'
import { style } from './style'
const Sobre = () => {
  return (
    <View style={style.container}>
      <Text style={style.title2}>Sobre Nosso Projeto</Text>

      <Text style={style.text}>
      O projeto “SeaMI” tem como objetivo aprimorar as eco barreiras existentes para filtrar micro plásticos e outros poluentes nos rios, prevenindo sua chegada aos oceanos. A iniciativa visa desenvolver uma solução eficaz para a remoção de macro e micro poluentes diretamente nas correntes fluviais. 

      O SeaMI consiste em uma estrutura posicionada no leito dos rios, instalando múltiplas unidades ao longo do curso d’agua. Cada uma dessas unidades executa um processo de filtragem, capturando os poluentes em diferentes estágios. Além da função de filtragem, cada ponto de instalação possuirá um sistema de monitoramento continuo da qualidade da água, este sistema analisa parâmetros críticos para garantir que o processo de purificação esteja funcionando adequadamente e que a qualidade da água esteja dentro dos padrões desejados. 

      Com essa abordagem, o SeaMI não apenas melhora a eficiência das atuais eco barreiras, mas também fornece dados essenciais para o controle ambiental, contribuindo para a saúde dos ecossistemas aquáticos e a proteção dos oceanos contra a poluição por micro plásticos. 
      </Text>


      
    </View>
  )
}

export default Sobre;
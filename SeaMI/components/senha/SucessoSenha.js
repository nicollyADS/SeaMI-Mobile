import { View, Text, Image } from 'react-native'
import React from 'react'
import Sucesso from '../../assets/images/sucesso.png'
import {style} from './style'

const SucessoSenha = () => {

    return(
        <View style={style.sucessContainer}>
            <Text style={style.sucessTittle}>Senha alterada com sucesso!</Text>
            <Image source={Sucesso} style={{ width: 100, height: 100 }} ></Image>

        </View>
    )

}

export default SucessoSenha;
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Image } from 'react-native';

const Logoff = ({ fazerLogoff }) => {
  return (
    <View>
      <TouchableOpacity onPress={fazerLogoff}>
        <Image source={require('../../assets/icon/sair.svg')} ></Image>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logoff;

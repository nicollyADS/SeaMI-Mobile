// No componente Menu
import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Logoff from '../logoff/Logoff';
import Home from '../home/Home';
import Amostra from '../amostra/Amostra';
import Relatorio from '../relatorio/Relatorio';
import Sobre from '../sobre/Sobre';
import CriarRelatorio from '../criarRelatorio/CriarRelatorio';

const Drawer = createDrawerNavigator();

const Menu = ({ fazerLogoff }) => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Amostra Água" component={Amostra} />
          <Drawer.Screen name="Criar Relatório" component={CriarRelatorio} />
          <Drawer.Screen name="Relatórios" component={Relatorio} />
          <Drawer.Screen name="Sobre Nós" component={Sobre} />
          <Drawer.Screen name="Sair">
            {() => <Logoff fazerLogoff={fazerLogoff} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Menu;

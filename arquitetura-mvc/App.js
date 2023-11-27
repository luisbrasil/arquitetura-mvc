import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './telas/TelaInicial';
import TelaDetalhesFilme from './src/view/FilmesView';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Filmes">
        <Stack.Screen name="Filmes" component={TelaInicial} />
        <Stack.Screen name="DetalhesFilme" component={TelaDetalhesFilme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

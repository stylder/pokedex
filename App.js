import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pokemons from './app/components/Pokemons';
import Details from './app/components/Details';
import Header from './app/components/Header';
import HeaderLeft from './app/components/HeaderLeft';

const Stack = createStackNavigator();
const backgroundColor = 'red';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokemons"
          component={Pokemons}
          options={{
            headerStyle: {
              backgroundColor,
            },
            headerTitleAlign: 'center',
            headerTitle: <Header />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor,
            },
            headerTitleAlign: 'center',
            title: <Header />,
            headerLeft: () => <HeaderLeft navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

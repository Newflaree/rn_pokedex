// React Navigator
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  HomeScreen,
  PokemonScreen,
  SearchScreen
} from '../screens';


export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={ HomeScreen } />
      <Stack.Screen name='PokemonScreen' component={ PokemonScreen } />
      <Stack.Screen name='SearchScreen' component={ SearchScreen } />
    </Stack.Navigator>
  );
}

import 'react-native-gesture-handler';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Navigator
import { StackNavigator } from './presentation/navigator';


const PokemonApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default PokemonApp;

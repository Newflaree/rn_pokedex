import 'react-native-gesture-handler';

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
// React Native Paper
import { PaperProvider } from 'react-native-paper';
// Navigators
import { StackNavigator } from './presentation/navigator';


const PokemonApp = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default PokemonApp;

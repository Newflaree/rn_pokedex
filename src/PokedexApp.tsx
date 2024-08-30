import 'react-native-gesture-handler';

// Navigators
import { StackNavigator } from './presentation/navigator';
// Context
import { ThemeContextProvider } from './presentation/context';


const PokemonApp = () => {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
}

export default PokemonApp;

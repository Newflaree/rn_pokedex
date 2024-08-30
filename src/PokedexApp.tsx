import 'react-native-gesture-handler';

// Navigators
import { StackNavigator } from './presentation/navigator';
// Context
import { ThemeContextProvider } from './presentation/context';
// TanStack
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';


const queryClient = new QueryClient();

const PokemonApp = () => {
  return (
    <QueryClientProvider client={ queryClient }>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default PokemonApp;

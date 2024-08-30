// React Native
import {
  View
} from 'react-native';
// React Native Paper
import {
  ActivityIndicator,
  Button,
  Text
} from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';
import { getPokemons } from '../../../actions/pokemons';


export const HomeScreen = () => {
  const { isLoading, data } = useQuery({
    queryKey: [ 'pokemons' ],
    queryFn: () => getPokemons(),
      staleTime: 1000 * 60 * 60, // 60 min
  });

  return (
    <View>
      <Text variant='displaySmall'>HomeScreen</Text>

      {
        isLoading
          ? <ActivityIndicator />
          : <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
            >
              Press me
            </Button>
      }
    </View>
  );
}

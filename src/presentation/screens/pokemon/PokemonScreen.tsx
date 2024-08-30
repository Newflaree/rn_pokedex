// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import { StackScreenProps } from '@react-navigation/stack';
// Actions
import { getPokemonById } from '../../../actions/pokemons';
// TanStack
import { useQuery } from '@tanstack/react-query';
// Navigator
import { RootStackParams } from '../../navigator';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { pokemonId } = route.params;
  const { isLoading, data: pokemon } = useQuery({
    queryKey: [ 'pokemon', pokemonId ],
    queryFn: () => getPokemonById( pokemonId ),
    staleTime: 1000 * 60 * 60
  });

  return (
    <View>
      <Text>{ pokemon?.name }</Text>
    </View>
  );
}

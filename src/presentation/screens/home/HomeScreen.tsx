// React Native
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// React Native Paper
import {
  Text
} from 'react-native-paper';
// TanStack Query
import { useQuery } from '@tanstack/react-query';
// Actions
import { getPokemons } from '../../../actions/pokemons';
// Components
import {
  PokeballBG,
  PokemonCard
} from '../../components';
// Styles
import { globalTheme } from '../../../config/theme';


export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, data: pokemons = [] } = useQuery({
    queryKey: [ 'pokemons' ],
    queryFn: () => getPokemons( 0 ),
    staleTime: 1000 * 60 * 60, // 60 min
  });

  return (
    <View style={ globalTheme.globalMargin }>
      <PokeballBG style={ styles.imgPosition } />

      <FlatList
        data={ pokemons }
        keyExtractor={ ( pokemon, index ) => `${ pokemon.id }-${ index }` }
        numColumns={ 2 }
        style={{ paddingTop: top }}
        ListHeaderComponent={ () => (
          <Text variant='displayMedium'>Pokédex</Text>
        )}
        renderItem={ ({ item: pokemon }) => (
          <PokemonCard pokemon={ pokemon } />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100
  }
});

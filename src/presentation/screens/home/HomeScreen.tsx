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
import {
  useInfiniteQuery,
  useQueryClient,
  //useQuery
} from '@tanstack/react-query';
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
  const queryClient = useQueryClient();

  /*
   * Petición tradicional
  const {
    isLoading,
    data: pokemons = []
  } = useQuery({
    queryKey: [ 'pokemons' ],
    queryFn: () => getPokemons( 0 ),
    staleTime: 1000 * 60 * 60, // 60 min
  });
   * */

  const {
    isLoading,
    data,
    fetchNextPage
  } = useInfiniteQuery({ 
    queryKey: [ 'pokemons', 'infinite' ],
    initialPageParam: 0,
    staleTime: 1000 * 60 * 60, // 60 min
    queryFn: async ( params ) => {
      const pokemons = await getPokemons( params.pageParam )
      pokemons.forEach( pokemon => {
        queryClient.setQueryData( [ 'pokemon', pokemon.id ], pokemon );
      });

      return pokemons;
    },
    getNextPageParam: ( lastPage, pages ) => pages.length,
  });

  return (
    <View style={ globalTheme.globalMargin }>
      <PokeballBG style={ styles.imgPosition } />

      <FlatList
        data={ data?.pages.flat() ?? [] }
        keyExtractor={ ( pokemon, index ) => `${ pokemon.id }-${ index }` }
        numColumns={ 2 }
        style={{ paddingTop: top }}
        ListHeaderComponent={ () => (
          <Text variant='displayMedium'>Pokédex</Text>
        )}
        renderItem={ ({ item: pokemon }) => (
          <PokemonCard pokemon={ pokemon } />
        )}
        onEndReachedThreshold={ 0.6 }
        onEndReached={ () => fetchNextPage() }
        showsVerticalScrollIndicator={ false }
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

// React Native
import {
  StyleSheet,
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
// Components
import { PokeballBG } from '../../components';


export const HomeScreen = () => {
  const { isLoading, data = [] } = useQuery({
    queryKey: [ 'pokemons' ],
    queryFn: () => getPokemons( 0 ),
    staleTime: 1000 * 60 * 60, // 60 min
  });

  return (
    <View>
      <PokeballBG style={ styles.imgPosition } />
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

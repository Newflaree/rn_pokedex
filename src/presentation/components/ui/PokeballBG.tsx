// React
import { useContext } from 'react';
// React Native
import {
  Image,
  ImageStyle,
  StyleProp,
} from 'react-native';
// Context
import { ThemeContext } from '../../context';


interface Props {
  style?: StyleProp<ImageStyle>
}

export const PokeballBG = ({ style }: Props) => {
  const { isDarkTheme } = useContext( ThemeContext );

  const pokeballImg = isDarkTheme
    ? require( '../../../assets/pokeball-light.png' )
    : require( '../../../assets/pokeball-dark.png' )

  return (
    <Image
      source={ pokeballImg }
      style={[
        {
          width: 300,
          height: 300,
          opacity: 0.3
        },
        style
      ]}
    />
  );
}

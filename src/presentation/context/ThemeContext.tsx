// React
import {
  createContext,
  PropsWithChildren
} from 'react';
// React Native
import { useColorScheme } from 'react-native';
// React Navigation
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
// React Native Paper
import {
  adaptNavigationTheme,
  PaperProvider
} from 'react-native-paper';


const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme
});

export const ThemeContext = createContext({
  isDarkTheme: false,
  currentTheme: LightTheme
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();

  const isDarkTheme = colorScheme === 'dark';
  const currentTheme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <PaperProvider theme={ currentTheme }>
      <NavigationContainer theme={ currentTheme }>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            currentTheme
          }}
        >
          { children }
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}

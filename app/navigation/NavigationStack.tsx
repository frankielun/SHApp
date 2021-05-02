import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './NavigationService';

import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import HeroDetail from '../screens/HeroDetail';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const FavStack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Super Heros',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <ThemeController />,
      }}
    />

    <Stack.Screen
      name="HeroDetail"
      component={HeroDetail}
      options={{
        title: 'Hero Detail',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <ThemeController />,
      }}
    />
  </HomeStack.Navigator>
);

const FavNavigator = () => (
  <FavStack.Navigator>
    <Stack.Screen
      name="Favorite"
      component={Favorite}
      options={{
        title: 'Favoirte',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <ThemeController />,
      }}
    />

    <Stack.Screen
      name="HeroDetail"
      component={HeroDetail}
      options={{
        title: 'Hero Detail',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <ThemeController />,
      }}
    />
  </FavStack.Navigator>
);

const Tab = createBottomTabNavigator();

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Tab.Navigator>
        <Tab.Screen name="Super Heros" component={HomeNavigator} />
        <Tab.Screen name="Favorite" component={FavNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

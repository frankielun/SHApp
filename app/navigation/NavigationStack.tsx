import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from './NavigationService';

import Home from '../screens/Home';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from '../models/reducers/login';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'SHApp',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <ThemeController />,
      }}
    />
  </HomeStack.Navigator>
);

const Tab = createBottomTabNavigator();

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Tab.Navigator>
        <Tab.Screen name="List" component={HomeNavigator} />
        <Tab.Screen name="Setting" component={HomeNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

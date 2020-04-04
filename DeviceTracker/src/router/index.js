import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../pages'

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
  );
}

export default Router;
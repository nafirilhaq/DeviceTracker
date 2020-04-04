import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { 
  Splash,
  Landing
} from '../pages'

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen 
            name="Splash" 
            component={Splash}
            options={{
                headerShown: false
            }} 
        />
        <Stack.Screen 
            name="Landing" 
            component={Landing}
            options={{
                headerShown: false
            }} 
        />
      </Stack.Navigator>
  );
}

export default Router;
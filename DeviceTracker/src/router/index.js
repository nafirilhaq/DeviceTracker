import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Landing, Splash } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
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
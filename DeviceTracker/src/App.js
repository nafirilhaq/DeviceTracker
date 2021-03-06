import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Router from './router';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

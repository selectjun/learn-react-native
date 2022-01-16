import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';
import {SerachContextProvider} from './contexts/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SerachContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SerachContextProvider>
    </NavigationContainer>
  );
}

export default App;

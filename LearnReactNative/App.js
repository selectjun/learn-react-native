import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded={true} />
    </SafeAreaView>
  );
};

export default App;

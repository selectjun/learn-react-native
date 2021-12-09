import React from 'react';
import {View, Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Text>Header가 없네?</Text>
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

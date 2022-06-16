/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import axios from 'axios';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={{flex: 1}}>
        <Text>換頁範例！</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
});

export default App;

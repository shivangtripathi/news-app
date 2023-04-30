import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './src/router';
import { store,persistor } from "./src/store/store";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor="rgb(188,0,0)"/>
      <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
      </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;

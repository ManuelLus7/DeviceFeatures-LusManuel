import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import { LocationProvider } from './config/LocationContext';
import { Provider } from 'react-redux'; 
import store from './store/store';

export default function App() {
  return (
    <LocationProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <AppNavigation />
        </SafeAreaView>
      </Provider>
    </LocationProvider>
  );
}

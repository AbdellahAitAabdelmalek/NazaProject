/**
 * Naza App
 *
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 */
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
} from 'react-native';
import NearEarthObjectsList from './src/modules/NearEarthObject/NearEarthObjectsList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NearEarthObjectsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

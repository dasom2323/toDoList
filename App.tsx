import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <Text>another piece of text</Text>
      </View>
      <Text style={styles.dummyText}>Hello World</Text>
      <Button title="Tap me~" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default App;

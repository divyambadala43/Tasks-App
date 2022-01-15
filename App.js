import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Add Tasks' />
        <Button title='ADD' />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10
  }

});

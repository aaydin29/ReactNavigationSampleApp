import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

function HomeScreen({navigation}) {
  function goToRegister() {
    navigation.navigate('Register');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kebapp Fitness</Text>
      <Text style={styles.text}>You must be registered to use the app!</Text>
      <Button text="Go to Register page!" onPress={goToRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7,
  },
  text: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default HomeScreen;

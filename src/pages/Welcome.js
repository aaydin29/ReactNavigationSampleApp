import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function WelcomeScreen({route}) {
  let {user} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Kebapp Fitness!</Text>
      <Text style={styles.informations}>Name: {user.name}</Text>
      <Text style={styles.informations}>Surname: {user.surname}</Text>
      <Text style={styles.informations}>Age: {user.age}</Text>
      <Text style={styles.informations}>Weight: {user.weight}</Text>
      <Text style={styles.informations}>E-mail: {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

export default WelcomeScreen;

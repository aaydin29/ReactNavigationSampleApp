import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function RegisterScreen({navigation}) {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [email, setEmail] = useState(null);

  function ControlRegister() {
    if (!name || !surname || !age || !weight || !email) {
      Alert.alert('Kebapp Fitness', 'Please fill in all the blanks!');
      return;
    }

    const user = {
      name,
      surname,
      age,
      weight,
      email,
    };

    navigation.navigate('Welcome', {screen: 'WelcomeScreen'}, {user});
  }

  return (
    <View>
      <Text style={styles.Header}>Register Screen</Text>
      <Input
        label={'Name'}
        placeHolder={'Enter your name!'}
        onChangeText={setName}
      />
      <Input
        label={'Surname'}
        placeHolder={'Enter your last name!'}
        onChangeText={setSurname}
      />
      <Input
        label={'Age'}
        placeHolder={'Enter your age!'}
        onChangeText={setAge}
      />
      <Input
        label={'Weight'}
        placeHolder={'Enter your weight!'}
        onChangeText={setWeight}
      />
      <Input
        label={'E-mail'}
        placeHolder={'Enter your e-mail address!'}
        onChangeText={setEmail}
      />
      <View style={styles.container}>
        <Button text="Sign Up" onPress={ControlRegister} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  Header: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default RegisterScreen;

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const handlePress = () => {
    Alert.alert('Bonjour', "Bienvenue dans l'app React Native !");
  };
  const handlePress2 = () => {
    if (name.trim() !== '') {
      Alert.alert('Salut !', `Bienvenue ${name} `);
    } else {
      Alert.alert('Oups', 'Tu dois entrer un nom.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello React Native !</Text>
      <Button title="Clique ici" onPress={handlePress} />
      <Text style={styles.subtitle}>Entre ton prénom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Ton prénom ici"
        onChangeText={text => setName(text)}
        value={name}
      />
      <View style={styles.buttonContainer}>
        <Button title="Dire bonjour" onPress={handlePress2} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Aller à la page suivante" onPress={() => navigation.navigate('Second')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
  },
});

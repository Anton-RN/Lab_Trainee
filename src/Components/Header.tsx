import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Open Account</Text>
        <Text style={styles.description}>Start by filling the form below to register</Text>
      </View>
      <Image source={require('../Assets/logo.webp')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textWrapper: {
    maxWidth: '70%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#36ad3b',
  },
  description: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
  logo: {
    maxWidth: 80,
    maxHeight: 80,
  },
});

export default Header;

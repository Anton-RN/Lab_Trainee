import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

interface StateSelectionButtonProps {
  title: string;
  selectedState: string;
  onPress: () => void;
}

const StateSelection = ({title, selectedState, onPress}: StateSelectionButtonProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.selectWrapper} onPress={onPress}>
        <Text style={styles.inputText}>{selectedState}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 20},
  title: {fontSize: 16, fontWeight: 'bold', marginBottom: 8},
  selectWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  inputText: {
    fontSize: 16,
  },
});

export default StateSelection;

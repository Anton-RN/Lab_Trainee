import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface RadioGroupWithTitleProps {
  title: string;
  options: {label: string; value: string}[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

const RadioGroupWithTitle = ({
  title,
  options,
  selectedValue,
  onValueChange,
}: RadioGroupWithTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapper}>
        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={styles.radioButton}
            onPress={() => onValueChange(option.value)}>
            <Text>{option.label}</Text>
            {selectedValue === option.value && <View style={styles.radioDot} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    minWidth: '45%',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#36ad3b',
    marginLeft: 8,
  },
});

export default RadioGroupWithTitle;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TermsCheckboxProps {
  isChecked: boolean;
  onToggle: () => void;
}

const TermsCheckbox = ({isChecked, onToggle}: TermsCheckboxProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.checkboxWrapper}>
        <View style={[styles.checkbox, isChecked && styles.checked]}>
          {isChecked && <View style={styles.innerChecked} />}
        </View>
      </TouchableOpacity>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>I agree to the </Text>
        <TouchableOpacity onPress={() => console.log('Terms and Conditions pressed')}>
          <Text style={styles.link}>Terms & Condition</Text>
        </TouchableOpacity>
        <Text style={styles.label}> and </Text>
        <TouchableOpacity onPress={() => console.log('Privacy Policy pressed')}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxWrapper: {
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: '#36ad3b',
  },
  innerChecked: {
    width: 12,
    height: 6,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#fff', // Цвет галочки белый
    transform: [{scaleX: -1}, {rotate: '45deg'}],
  },
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '90%',
  },
  label: {
    fontSize: 16,
  },
  link: {
    textDecorationLine: 'underline',
    color: '#007bff',
  },
});

export default TermsCheckbox;

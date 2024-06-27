import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TextInputProps, KeyboardTypeOptions} from 'react-native';

interface CustomInputProps extends TextInputProps {
  type: 'phone' | 'email';
  onValueChange?: (text: string) => void;
}

const getInputAttributes = (type: 'phone' | 'email') => {
  switch (type) {
    case 'phone':
      return {
        title: 'Phone Number',
        placeholder: 'Enter phone number...',
        keyboardType: 'phone-pad' as KeyboardTypeOptions,
      };
    case 'email':
      return {
        title: 'Email Address',
        placeholder: 'Enter email...',
        keyboardType: 'email-address' as KeyboardTypeOptions,
      };
    default:
      return {
        title: 'Input',
        placeholder: 'Enter text...',
        keyboardType: 'default' as KeyboardTypeOptions,
      };
  }
};

const CustomInput = ({type, onValueChange, ...rest}: CustomInputProps) => {
  const [value, setValue] = useState('');

  const {title, placeholder, keyboardType} = getInputAttributes(type);

  const getName = () => {
    return 'Joe Done';
  };

  const handleBlur = () => {
    onValueChange?.(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onBlur={handleBlur}
        placeholder={placeholder}
        placeholderTextColor="#ccc"
        autoCapitalize="none"
        keyboardType={keyboardType}
        {...rest}
      />
      {type === 'phone' && value ? <Text style={styles.description}>{getName()}</Text> : null}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  description: {
    color: 'grey',
  },
});

export default CustomInput;

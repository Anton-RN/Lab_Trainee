import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TextInputProps, KeyboardTypeOptions} from 'react-native';

interface CustomInputProps extends TextInputProps {
  type: 'phone' | 'email';
  onChangeText?: (text: string) => void;
}

const CustomInput = ({type, onChangeText, ...rest}: CustomInputProps) => {
  const [value, setValue] = useState('');

  let title = '';
  let placeholder = '';
  let keyboardType: KeyboardTypeOptions = 'default';

  switch (type) {
    case 'phone':
      title = 'Phone Number';
      placeholder = 'Enter phone number...';
      keyboardType = 'phone-pad';
      break;
    case 'email':
      title = 'Email Address';
      placeholder = 'Enter email...';
      keyboardType = 'email-address';
      break;
    default:
      title = 'Input';
      placeholder = 'Enter text...';
      keyboardType = 'default';
      break;
  }

  const getName = () => {
    return 'Joe Done';
  };

  const handleBlur = () => {
    onChangeText && onChangeText(value);
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

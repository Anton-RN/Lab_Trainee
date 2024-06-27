import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import CustomInput from '../Components/CustomInput';
import RadioGroupWithTitle from '../Components/RadioGroupWithTitle';
import StateSelection from '../Components/StateSelection';
import Header from '../Components/Header';
import TermsCheckbox from '../Components/TermsCheckbox';

const FirstScreen = ({navigation, route}: {navigation: any; route: any}) => {
  const [selectedState, setSelectedState] = useState(route.params?.selectedState || 'Select state');
  const [selectedOption, setSelectedOption] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const getMethodsOfVerification = () => {
    return [
      {label: 'BVN', value: 'bvn'},
      {label: 'NIN', value: 'nin'},
    ];
  };


  const methodsOfVerification = getMethodsOfVerification();

  useEffect(() => {
    if (methodsOfVerification.length > 0) {
      setSelectedOption(methodsOfVerification[0].value);
    }
  }, []);

  const getAllComponentValues = () => {
    console.log({
      selectedState,
      selectedOption,
      isChecked,
      phone,
      email,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header />
        <CustomInput type="phone" onValueChange={setPhone} />
        <CustomInput type="email" onValueChange={setEmail} />
        <StateSelection
          title={'State'}
          selectedState={selectedState}
          onPress={() => navigation.navigate('StateModal', {setSelectedState})}
        />
        <RadioGroupWithTitle
          title="Verification Method"
          options={methodsOfVerification}
          selectedValue={selectedOption}
          onValueChange={value => setSelectedOption(value)}
        />
        <TermsCheckbox isChecked={isChecked} onToggle={handleToggle} />
        <Button title="Get All Values" onPress={getAllComponentValues} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },
});

export default FirstScreen;

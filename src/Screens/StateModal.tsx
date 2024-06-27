import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput} from 'react-native';

const StateModal = ({navigation, route}: {navigation: any; route: any}) => {
  const {setSelectedState, listOfState} = route.params;
  const [search, setSearch] = useState('');
  const [filteredStates, setFilteredStates] = useState<string[]>(getStates);

  const handleSelectState = (state: string) => {
    setSelectedState(state);
    navigation.goBack();
  };

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = getStates.filter((item: string) =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredStates(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={search}
        onChangeText={handleSearch}
        placeholder="Search state..."
      />
      <FlatList
        data={filteredStates}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => handleSelectState(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default StateModal;

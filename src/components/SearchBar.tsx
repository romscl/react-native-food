import React from 'react';
import { View, TextInput , StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
    <View style={styles.backgound}>
        <Feather 
            style={styles.icon}
            name="search" size={30}/>
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            placeholder="Search"  
            value={term}
            onChangeText={onTermChange}  
            onEndEditing={onTermSubmit}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    backgound: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;  
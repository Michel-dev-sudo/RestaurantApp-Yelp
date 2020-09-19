import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar =({term,onChangeTerm,onTermSubmit}) => {
    return (
    <View style={styles.search}>
        <Feather 
        style={styles.iconStyle}
        name="search"  
        /> 
        
        <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
       //=== onChangeText={newTerm=>onChangeTerm(newTerm)}  this can be replaced by
       onChangeText={onChangeTerm}
       onEndEditing={onTermSubmit}
        />
    </View>
   );
}

 const styles = StyleSheet.create({
     search:{
         marginVertical:15,
        backgroundColor:'#ffffff',
        height:50,
        borderRadius:25,
        marginHorizontal:15,
        flexDirection:"row",
        marginLeft:2,
        alignSelf:'flex-start', 
        marginBottom:10
     },
     input:{ 
        flex:1,
         //it assigns the border to the last horizontally if we give border to it
         fontSize:17,
         marginLeft:15
         ,
     },
     iconStyle:{
        fontSize:35,
        alignSelf:"center",
        marginLeft:10,
        marginTop:4,
     }
    
    
 });

 export default SearchBar;
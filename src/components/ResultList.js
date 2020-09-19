import React from 'react';
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';


const ResultList=({title ,results,navigation})=>{

    if(!results.length) //this removes heading if no data present
    {
        return null;
    }

    return(
    <View>
        <Text style={styles.design}>{title}</Text>

        <FlatList
        style={styles.flatlist}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result=>result.id}
        renderItem={({item})=>{
       //  return <Text>{item.name}</Text> ===here we are sending all the data on the 
       //result to the resultdetail. display all no only the name

       return (
         <TouchableOpacity 
         onPress={() => navigation.navigate('Results',{id:item.id})} 
         >
            <ResultDetail  result={item} />
         </TouchableOpacity>
       );
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({

    design:{
    fontSize:15,
    fontWeight:'bold',
    marginVertical:10,
    marginLeft:10
    
    } ,
    flatlist:{

    },

});
export default withNavigation(ResultList);
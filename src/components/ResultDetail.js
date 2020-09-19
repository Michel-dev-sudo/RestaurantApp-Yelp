import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';


const ResultDetail = ({result}) => {
    return(
    <View style={styles.containeer}>
       
      <Image 
      style={styles.image}
      source={{uri:result.image_url}} />
      <Text>{result.name}</Text>
      <Text>{result.rating} Stars,{result.review_count}</Text>
    </View>
    );
};
//here {{}} in image is -- one for js expression and next for forming the object we want to pass
const styles = StyleSheet.create({
    image:{
    height:150,
    width:250,
    },
    containeer:{
        marginLeft:15
    }
});

export default ResultDetail;
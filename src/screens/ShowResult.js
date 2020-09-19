import React,{useState,useEffect} from 'react';
import yelp from '../api/yelp';
import {Text,View,StyleSheet,FlatList,Image} from 'react-native';



const ShowResult = ({ navigation }) => {
    const id = navigation.getParam('id');
    const[data,setData] = useState(null);

    const getResult = async id => {  //===id is pass as the argument
        const response = await yelp.get(`/${id}`)
        setData(response.data);
        console.log(data);
    }
    useEffect(()=>{
        getResult(id);
      },[]);

    if(!data){
        return null;
    }

    return (
        <View>
            <Text>{data.name}</Text>
            <FlatList
                data={data.photos}
                keyExtractor={photo=>photo}
                renderItem={({item})=>{
                    return <Image 
                    source={{uri:item}}
                    style = {styles.image}
                     />
                }}
            />
            
        </View>
    );
};
const styles = StyleSheet.create({
    image:{
        height:200,
        width:400
    }
});

export default ShowResult;
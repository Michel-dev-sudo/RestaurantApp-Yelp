import yelp from '../api/yelp';
import {useState,useEffect} from 'react';

export default()=>{
    const [results,setResults] = useState([]);
    const[errorMessage,SetErrorMessage] = useState('');


    const searchApi = async (searchTerm) => {
    try{
    const response = await yelp.get('/search', {
        params:{
            limit:50,
            term:searchTerm,
           location:'san jose'
        }
    });
    setResults(response.data.businesses);
    }
    catch(err){
    SetErrorMessage('something went wrong');
    }
    };

    useEffect(()=>{
    searchApi('Pasta');
    },[]);
 
    return [searchApi,results,errorMessage];
}
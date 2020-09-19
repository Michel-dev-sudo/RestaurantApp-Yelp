import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';

import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';




const SearchScreen =() => {

    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResult();

    const filterResultByPrice=(price)=>{
        //price=$,$$,$$$
        return results.filter(result=>{
            return result.price===price;
        });
    }

  //  console.log(results);
    return (
    <>
        <SearchBar
            term={term}
            // onChangeTerm={newTerm=>setTerm(newTerm)} === alternative is in next line
            onChangeTerm={setTerm}
            onTermSubmit={()=>searchApi(term)}
        />
        {errorMessage? <Text>{errorMessage}</Text> :null}
        <ScrollView>
            <ResultList

            results={filterResultByPrice('$')} title="Cost effective"/>
            <ResultList

            results={filterResultByPrice('$$')} title="Bit pricer"/>
            <ResultList

            results={filterResultByPrice('$$$')}  title="Bit spender"/>
        </ScrollView>

   </>
   );
};
 const styles = StyleSheet.create({


 });

 export default SearchScreen;

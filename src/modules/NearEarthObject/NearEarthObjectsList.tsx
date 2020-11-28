/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';


// function useLocalStorageState (key: any, defaultValue:any){
//     const [state, setState] = React.useState( 
//       () => window.localStorage.getItem(key) || defaultValue
//       )
  
//     React.useEffect(()=>{
//         console.log("useEffect of "+key+" used");
//         window.localStorage.setItem(key, state)
//         return ()=> { console.log("cleanup useEffect of "+key); }
//     }, [state]);

//     return [state, setState];
// }

//---------------------------------------------------------------------------

// const CustomImage = () => (
//   <TouchableOpacity onPress={()=> Alert.alert("ImageClicked","You have clicked on the image",[ 
//       {text: "Yes"},
//       {text: "No"},
//     ])
//   }>
//     <Image 
//         fadeDuration={1000}
//         source={{
//           width: 200,
//           height:300,
//           uri : "https://picsum.photos/200/300"
//         }}/>
//   </TouchableOpacity>
// );

const StyledTouchableOpacity = styled(TouchableOpacity)`
width: 50%;
`;

// 


const Item = ({ item, onPress, style}:any) => (
  <StyledTouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
  </StyledTouchableOpacity>
);

export default function NearEarthObjectsList() {
  const [selectedId, setSelectedId] = useState(null);
  const [listNearEarthObjects, setlistNearEarthObjects] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const url = 'http://www.neowsapp.com/rest/v1/neo/browse?page=0&size=20&api_key=y125lgm1Npphd8NEldDxfgTQ5q1NsnCsXzTgjqXw'
  React.useEffect(() => {
    axios
    .get(url)
    .then((res : any) =>{
        console.log(res.data.near_earth_objects);
        setlistNearEarthObjects(res.data.near_earth_objects)
        setisLoading(false);
    })
    .catch((_err : any)=> {
      console.log('erreur !!!!');
    })
  },[]);
  const renderItem = ({ item }:any) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    return ( <Item item={item} onPress={() => setSelectedId(item.id)} style={{ backgroundColor }} />);
  };

  return (
      isLoading === true ?
          <Text >"loading ..."</Text>
       :
          <FlatList
            data={listNearEarthObjects}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

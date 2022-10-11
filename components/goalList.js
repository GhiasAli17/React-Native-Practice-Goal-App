import { useState, useCallback, useEffect } from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import Goal from "./goal";
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';

function GoalList({route,navigation}){

   
  const isFocused = useIsFocused();
  const [uri, setUri] = useState()

    const [goals, setGoals] = useState([{id:1,title:'a'},{id:2,title:'b'},{id:3,title:'c'}])
    console.log("route above", route)

    useFocusEffect(
      useCallback(() => {
         
          // check?setCheck(false):setCheck(true)
          console.log('route', route)
          if(route && route.params && route.params.title){
            const {title} = route.params;
            const {imgUri} = route.params?.imgUri;
            if(imgUri){
              setUri(imgUri)
            }
            console.log("title is ", title)
            const arrCopy = [...goals];
            arrCopy.push({id:Math.random(),title})
            setGoals(arrCopy)
            console.log('array', arrCopy);
          }
    
        
        // Do something when the screen is focused
        return () => {
          // Do something when the screen is unfocused
          // Useful for cleanup functions
        };
      }, [route])
    );

   
    const onPressGoal = () => {
          navigation.navigate("GoalInput")
    }

    const onPressGoalDetail = (item) => {
         navigation.navigate("Home",{item})
    }

    const renderItem = ({ item }) => (
        <Goal title={item.title} onPress ={()=>onPressGoalDetail(item)}/>
      );

     return(
       <SafeAreaView style={styles.container}>
         {
          isFocused?
          <>
          <FlatList data={goals}
          keyExtractor={(goal=>goal.id)}
          renderItem={renderItem}
          />
          <AntDesign name="plus" size={24} color="black" style={styles.floatButton} onPress={onPressGoal}/>
          </>:<Text>No data</Text>
         }
      
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:50,

    },
    floatButton:{
      textAlign:"right",
      marginBottom:15,
      color:'green',
      fontSize:40,
    }
})

export default GoalList;
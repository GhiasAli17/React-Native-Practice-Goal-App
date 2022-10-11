import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Pressable, Image } from "react-native";
function Goal(props){
    return(
        <View style={styles.container}>
        <Image source={require("../assets/images.jpg")} style={styles.image}/>
        <Pressable onPress={props.onPress}>
        <Text style={styles.goal}>{props.title}</Text> 
        </Pressable>
        
        

        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    borderWidth:5,
    borderColor:'transparent',
   
    borderBottomColor:'grey'
  },
    goal:{
      
      borderRadius:7,
      padding:8,
      marginBottom:5,
    },
    image:{
      width:'100%',
      borderRadius:7
      
    }
  });

export default Goal;
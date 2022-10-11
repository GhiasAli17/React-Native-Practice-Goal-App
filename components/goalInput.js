import { useState } from "react";
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Platform } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import * as ImagePicker from 'expo-image-picker';


function GoalInput({navigation}) {
  const [goalText, setGoalText] = useState()
  const [image, setImage] = useState(null);

  const onInputChange = (inputText) => {
    setGoalText(inputText)
    console.log('input',goalText)
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={styles.upperPart}>
      <TextInput placeholder="Your coarse goal" onChangeText={onInputChange} value={goalText}/>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Add goal" onPress={() => {navigation.navigate("GoalList",{title:goalText})}} />
      <Button title="Open Camera" onPress={() => navigation.navigate("CameraShow")}/>
      <Button title="Take from Gallery" onPress={pickImage}/>

    </View>
  );
}

const styles = StyleSheet.create({
   
    upperPart: {
      flexDirection: "column",
      justifyContent: "space-between",
    },
   
  });

export default GoalInput;

import { View , Text, TextInput,StyleSheet, Alert} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Button from "../ui/button";
import { useState } from "react";


function Login({navigation}){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const onEmailChange = (inputText) => {
           setEmail(inputText)
    }

    const onPasswordChange = (inputText) => {
        setPassword(inputText)
    }
    const onButtonPress = () => {
        console.log('called', email, 'password', password)
        if(email && password){
            navigation.navigate("GoalList",{title:null})
        }
        else{
            Alert.alert("Incorrect username or password")
        }
        
    }
    return(
        <View style={styles.container}>
      
            <MaterialIcons name="account-circle" size={100} color="black" style={styles.account} />
            <Text style={styles.email}>Email</Text>
            <TextInput style={styles.emailInput} onChangeText={onEmailChange} />
            <Text>Password</Text>
            <TextInput style={[styles.emailInput,{marginBottom:3}]} onChangeText={onPasswordChange}/>
             <View>
            <Text style={styles.rememberMe}>Remember Me</Text>
            </View>
            <Button color="#ff6666" title="LOGIN" onPress={onButtonPress}></Button>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        paddingHorizontal:20,
       },
    rememberMe:{
         marginBottom:20,
    },
    forgotPassword:{
        textAlign:'right',
        marginTop:10,
        color:'grey'
    },
    account:{
         textAlign:'center'

    },
    email:{
        marginTop:20,

    },
    emailInput:{
        borderRadius:8,
        width:'100%',
        borderWidth:1.5,
        marginTop:10,
        marginBottom:5,
        borderColor:'grey',
        padding:10,
        
    },
    passwordInput:{
        borderRadius:8,
        width:'100%',
        borderWidth:2,
        borderColor:'grey',
        padding:10,
        
    }
})

export default Login;
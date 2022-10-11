import { Pressable, View, Text, StyleSheet } from "react-native"

function Button({title,color,onPress}){
    return(
       
            <Pressable onPress={onPress}>
                <Text style={styles.button}>
                   {title}
                </Text>
            </Pressable>
        
    )
}

const styles =  StyleSheet.create({
     button:{
        color:'white',
        backgroundColor:'red',
        textAlign:'center',
        borderRadius:10,
        paddingVertical:10,
     }
})
export default Button;
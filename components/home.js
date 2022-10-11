import { View, Text } from "react-native";

function Home({route, navigation}){
    const {item} = route.params;
    return(
        <View>
            <Text>{item.title}</Text>
        </View>
    )
}
export default Home;
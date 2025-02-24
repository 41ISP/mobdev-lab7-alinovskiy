import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, View } from "react-native"
import { StyleSheet } from 'react-native';
const ChatScreen = () => {
return(
    
    <ScrollView style={styles.view}>
     <View>
        <Text>12321</Text>
     </View>
     <View>
     <Text>12321</Text>
     </View>
    </ScrollView>
   
   
)
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: "rgb(201, 132, 42)",
    }
})

export default ChatScreen
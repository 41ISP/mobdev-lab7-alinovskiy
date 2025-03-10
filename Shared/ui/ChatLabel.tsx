import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, TextInput, View } from "react-native"
import { StyleSheet } from 'react-native';

const ChatLabel = () => {
    return (
            <View style={styles.chat}>
                <Text>12365421</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: "rgb(58, 162, 226)",
    },
    chat: {
        backgroundColor: "rgb(58, 162, 226)",
        borderColor: "#000000",
        borderWidth: 1,
        height: 50,
        margin: 5,
        marginLeft: 0,
        marginRight: 0,
    },
    mess: {
        width: 50,
        height: 50,
        borderColor: "#000000",
        borderWidth: 2,
    },
    input: {
        width: 200,
        height: 50,
        borderColor: "#000000",
        borderRadius: 1,
    }

})

export default ChatLabel


import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';

import { useState } from "react";
import Input from "./Input";
import MessageInput from "./MessageInput";


const Chat = () => {
    const [input, setInput] = useState("");
    const HandleText = (e: string) => {

    }
    return (

<View style={styles.div}>
            <View style={styles.View}>
                <Text></Text>
            </View>
            <View style={styles.Vi}> 
            <MessageInput value={""} onChangeText={HandleText} placeholder={""}/>
            </View>
        </View>


    )
}
const styles = StyleSheet.create({
    View: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: "#000000",
        marginTop: 20,
        borderRadius: 10,
        color: "#000000"
    },
    Vi: {
            flexDirection: "row",
            verticalAlign: "bottom",
            
    },
    div: {
        borderWidth: 1,
        borderColor: "#000000",
        backgroundColor: "rgb(58, 162, 226)",
    }
   
})

export default Chat

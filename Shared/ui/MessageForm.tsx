
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';

import { useState } from "react";
import Input from "./Input";
import MessageInput from "./MessageInput";
import MessageBubble from "./MessageBubble";


const MessageForm = () => {
    const [input, setInput] = useState("");
    const HandleText = (e: string) => {

    }
    return (
        <View style={styles.form}>
            <MessageBubble/>
            <MessageInput value={input} onChangeText={HandleText} placeholder={"Напишите сообщение"} />
            <TouchableOpacity style={styles.button}></TouchableOpacity>
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
    form: {
        flexDirection: "row",
        verticalAlign: "bottom",
    },
    div: {
        backgroundColor: "rgb(58, 162, 226)",
    },
    button: {
        width: 60,
        height: 45,
        borderWidth: 1,
        borderColor: "#00000",
        marginLeft: 5,
    }

})

export default MessageForm

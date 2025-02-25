
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';

import { useState } from "react";
import Input from "./Input";


const ChatScreen = () => {
    const [input, setInput] = useState("");
    const HandleText = (e: string) => {

    }
return(
    
    <View style={styles.div}>
    <View style={styles.View}>
     <Text></Text>
    </View>
    <Input value={input} onChangeText={HandleText} placeholder={"Введите сообщение"}></Input>
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
       
       },
    div: {
        height: 600,
        width: 400,  
        borderWidth: 1,
     borderColor: "#000000",
     backgroundColor: "rgb(58, 162, 226)",
    },
    msg: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: "#000000",
        color: "#000000",
       marginTop: 20,
       borderRadius: 10,
       textAlign: "left",
       left: 107,
    },
    input: { 
        
        width: 200,
        height: 50,
        borderColor: "#000000",
    }
})

  export default ChatScreen
  
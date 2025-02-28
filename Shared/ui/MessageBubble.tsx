import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native"



const MessageBubble = () => {
    return (
        <View
            style={Style.message}>
            <Text>432123</Text>
            <Text style={Style.received}>12:53</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    message: {
        maxWidth: "75%",
        padding: 10,
        borderWidth: 2,
        borderRadius: 5,
        marginVertical: 4,
    },
    received: {
        alignSelf: "flex-start",
    }
})

export default MessageBubble; 
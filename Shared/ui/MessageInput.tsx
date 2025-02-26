import { TextInput, View } from "react-native"
import { StyleSheet } from 'react-native';
interface IInput {
    value: string
    onChangeText: ((e: string) => void)
    placeholder: string
}

const MessageInput = ({ value, onChangeText, placeholder }: IInput) => {
    return (
        <TextInput placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={styles.Input} />
    )
}
const styles = StyleSheet.create({
    Input: {
        height: 45,
        width: 250,
        borderWidth: 1,
        borderColor: "#000000",
        justifyContent: "center",
        flexDirection: "row",
        verticalAlign: "bottom",


    },
});
export default MessageInput;
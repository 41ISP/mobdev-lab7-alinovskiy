import Input from "@/Shared/ui/Input";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { StyleSheet } from 'react-native';
const router = useRouter();
const LoginScreen = () => {
    const [input, setInput] = useState("");
    const handleChange = (e: string) => {
        if (input.length <= 41) {
            setInput(e)
        }
        else {
            setInput(state => state.slice(0, 40))
            Alert.alert("Ошибка, Запрос привысил 40 символов!!!")
        }
    }

    const HandleClick = () => {
        if (input) {
            router.replace("/(tabs)")
        }

    }

    return (
        <View>
            <Input value={input} onChangeText={handleChange}
                placeholder={"Введите свой ID"} />
            <TouchableOpacity style={styles.dropdown} onPress={HandleClick}></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    dropdown: {
        width: 100,
        height: 30,
        borderWidth: 1,
        borderColor: "#000000",
        alignItems: 'center',
        borderRadius: 5,
    }
})

export default LoginScreen
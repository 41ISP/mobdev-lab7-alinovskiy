import message from "@/Shared/api/api";
import Input from "@/Shared/ui/Input";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { StyleSheet } from 'react-native';
import { UserStore } from "@/Entitiy/User/Store";
const LoginScreen = () => {
    const router = useRouter();
    const {idUser, addUser} = UserStore()
    const [input, setInput] = useState("");
    const handleChange = (e: string) => {
        if (input.length <= 41) {
            setInput(e)
        }
        else {
            setInput(state => state.slice(0, 40))
            Alert.alert("Ошибка, Запрос привысил 40 ГРАДУСОВ!!!")
        }
    }

    const HandleClick = () => {
        if (input.trim()) {
            try {
                message.logReq(input)
                addUser({id: input })
                router.push('/(tabs)')
                Alert.alert("Пользователь успешно создан")
            }
            catch {
              
            }
        }
        
    }

    return (
        <View style={styles.View}>
            <Input value={input} onChangeText={handleChange}
                placeholder={"Введите свой ID"} />
            <TouchableOpacity style={styles.dropdown} onPress={HandleClick}><Text>Войти</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        width: 100,
        borderWidth: 1,
        borderColor: "#000000",
        alignItems: 'center',
        borderRadius: 5, 
    }, 
    View: {
      
        marginTop: "50%",
    }
 
})

export default LoginScreen
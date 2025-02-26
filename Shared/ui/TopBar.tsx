import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';
import { Text } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

const TopBar = () => {
    const router = useRouter();
    const PageHistory = () => {
        router.replace('/ChatScreen');
    }
    const ContactScreen = () => {
        router.replace('/ContactScreen');
    }
    const Back = () => {
        router.replace('/');
    }
    return (

        <LinearGradient colors={['#5be9aa', '#09949d']} style={styles.View}>
            <TouchableOpacity style={styles.dropdown} onPress={PageHistory}><Text style={styles.text}>Чаты</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dropdown} onPress={Back}><Text style={styles.text}>Сообщения</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dropdown} onPress={ContactScreen}><Text style={styles.text}>Контакты</Text></TouchableOpacity>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    dropdown: {
        width: 100,
        height: 30,
        fontSize: 20,
        margin: 5,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: "#000000",
        alignItems: 'center',
        borderRadius: 5,
        // backgroundColor: "linear-gradient(-225deg, #231557, 0%, #44107A, 29%)"
    },
    text: {
        fontSize: 15,
    },
    View: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    gradient: {
        backgroundColor: "linear-gradient(-225deg, #231557, 0%, #44107A, 29%)"
    }
});

export default TopBar
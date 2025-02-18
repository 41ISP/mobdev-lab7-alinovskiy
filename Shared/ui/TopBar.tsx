import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';
import { Text } from "react-native";
const TopBar = () => {
    const router = useRouter();
    const PageHistory = () => {
        router.push('/ChatScreen');
    }
    const ContactScreen = () => {
        router.push('/ContactScreen');
    }
    const Back = () => {
        router.push('/');
    }
return(
    <View>
        <TouchableOpacity style={styles.dropdown} onPress={PageHistory}><Text style={styles.text}>Чат</Text></TouchableOpacity>
        <TouchableOpacity style={styles.dropdown} onPress={ContactScreen}><Text>Контакты</Text></TouchableOpacity>
        <TouchableOpacity style={styles.dropdown} onPress={Back}><Text style={styles.text}>Сообщения</Text></TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
    dropdown: {
        width: 150,
        height: 50,
        fontSize: 20,
        display: grid ,
    },
    text: {
        fontSize: 20,
    }
});

export default TopBar
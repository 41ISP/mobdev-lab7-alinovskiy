import { Image, Text, View } from "react-native";
import { StyleSheet } from 'react-native';

const Contact = () => {
    return(
        <View style={styles.div}>
            <View style={styles.view}>
                    <Text style={styles.text}>123</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
     width: 400,
     height: 50,
     borderColor: "#000000",
     borderWidth: 1,
    },
    div: {
        width: 400,
        borderColor: "#000000",
        borderWidth: 1,
        textAlign: "center",
       },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        top: 10,
        textAlign: "center",
        
    }
})
export default Contact

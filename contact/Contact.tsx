import { Image, Text, View } from "react-native";
import { StyleSheet } from 'react-native';



const Contact = () => {
    return(
        <View style={styles.div}>
            <View style={styles.view}>
                <View>
                    {/* <Image source={}></Image> */}
                </View>
                    <Text style={styles.text}>123</Text>
            </View>
            <View style={styles.view}>
                <View>
                    <Image></Image>
                </View>
                    <Text style={styles.text}>123</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
     width: 350,
     height: 50,
     borderColor: "#000000",
     borderWidth: 1,
     margin: 5,
     borderRadius: 5,
     
    },
    div: {
        textAlign: "center",
        backgroundColor: "rgb(34, 155, 192)",
       },
    image: {
        width: 50,
        height: 50,
    },
    text: {
        textAlign: "center",  
    },
    Image: {
        margin: 10,
    }
})
export default Contact

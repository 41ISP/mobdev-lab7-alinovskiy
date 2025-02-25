import { UserStore } from "@/Entitiy/User/Store";
import { Image, Text, View } from "react-native";
import { StyleSheet } from 'react-native';


const Contact = ({}) => {  
    return(
            <View style={styles.view}>
                <View>
                    {/* <Image source={}></Image> */}
                </View>
                    <Text style={styles.text}>{}</Text>
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
    },
    color: {
        backgroundColor: "rgb(58, 162, 226)",
    }
})
export default Contact

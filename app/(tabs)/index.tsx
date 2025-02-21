
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';


const MsgScreen = () => {

return(
    
    <ScrollView style={styles.div}>
    <View style={styles.View}>
     
    </View>
    <View style={styles.msg}>

    </View>
    </ScrollView>
   
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
       alignContent: "center",
       alignItems: "center",
       textAlign: "left",
       left: 107,
    }
})

  export default MsgScreen
  
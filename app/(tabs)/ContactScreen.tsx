import ContactLabel from "@/Shared/ui/ContactLabel"
import { View , Text, ScrollView} from "react-native"
import { StyleSheet } from 'react-native';


const ContactScreen = () => {
    return(
        <ScrollView style={styles.chat}>
          <ContactLabel/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    chat: {
      backgroundColor: "rgb(58, 162, 226)",
    }

})
export default ContactScreen
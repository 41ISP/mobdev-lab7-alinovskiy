import Contact from "@/contact/Contact"

import TopBar from "@/Shared/ui/TopBar"
import { View , Text, ScrollView} from "react-native"
import { StyleSheet } from 'react-native';


const ContactScreen = () => {
    return(
        <ScrollView style={styles.chat}>
          <Contact/>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    chat: {
      backgroundColor: "rgb(58, 162, 226)",
    }

})
export default ContactScreen
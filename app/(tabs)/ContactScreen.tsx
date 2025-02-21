import Contact from "@/contact/Contact"
import TopBar from "@/Shared/ui/TopBar"
import { View , Text, ScrollView} from "react-native"

const ContactScreen = () => {
    return(
        <ScrollView>
          <Contact/>
        </ScrollView>
    )
}

export default ContactScreen
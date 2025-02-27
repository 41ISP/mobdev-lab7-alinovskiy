
import MessageBubble from "@/Shared/ui/MessageBubble";
import MessageForm from "@/Shared/ui/MessageForm";
import ChatScreen from "@/Shared/ui/MessageForm";
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { StyleSheet } from 'react-native';
import message from "@/Shared/api/api";
import { useEffect } from "react";


const MsgScreen = () => {
  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     const information = await message.msgReq(id);
  //   };
  //   fetchMovie();
  // }, []);

return(
    
    <View style={styles.View}>
      <ScrollView>
        {/* <FlatList data={} renderItem={(msg) => (<MessageBubble {...msg}/>)}/> */}
      </ScrollView>
      <MessageForm />
    </View>
   
)
}
const styles = StyleSheet.create({
  View: {
   
  }
})


  export default MsgScreen
  
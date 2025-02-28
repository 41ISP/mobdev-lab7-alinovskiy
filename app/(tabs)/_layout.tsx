import { UserStore } from '@/Entitiy/User/Store';
import TopBar from '@/Shared/ui/TopBar';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
import { useEffect} from 'react';


export default function tabLayout() {
  const {idUser} = UserStore();
  const router = useRouter();
  useEffect(() => {
    if (!idUser) {
      router.replace("/")
    }
  }, [])
  // const [loginId, setLoginId] = useState(false);
  // useEffect(() => {
  //   const user = false
  //   setLoginId(user)
  //   if (user) {
  //     router.replace("/(tabs)")
  //   }
  // })

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Главная" }} />
        <Stack.Screen name="ChatScreen" options={{ title: "Чат" }} />
        <Stack.Screen name="ContactScreen" options={{ title: "Контакты" }} />
      </Stack>
      <TopBar />
    </>
  );
}

import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/user/login/LoginScreen"
import RegisterScreen from "./src/screens/user/register/RegisterScreen"
import OrderScreen from "./src/screens/order/OrderScreen"
import BottomNav from "./src/components/navigation/BottomNav"
import { UserProvider } from "./src/context/userContext";



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UserProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false,
          }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Bottom" component={BottomNav} />

          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider >
    </UserProvider>
  );
}


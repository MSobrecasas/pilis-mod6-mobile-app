import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import SingleProductScreen from "../../screens/product/SingleProductScreen";
import ShippingScreen from "../../screens/order/shipping/ShippingScreen";
import PlaceOrderScreen from "../../screens/order/placeOrder/PlaceOrderScreen";
import PaymentScreen from "../../screens/order/payment/PaymentScreen";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SingleProductScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="CheckOut" component={PaymentScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;

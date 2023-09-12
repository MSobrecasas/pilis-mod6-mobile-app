import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Pressable } from "native-base";
import ProfileScreen from "../../screens/user/profile/ProfileScreen";
import CartScreen from "../../screens/cart/CartScreen";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    rounded="full"
    bg={COLORS.main}
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
);

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="home"
                  size={FONT_SIZE.lg}
                  color={COLORS.main}
                />
              ) : (
                <FontAwesome5
                  name="home"
                  size={FONT_SIZE.lg}
                  color={COLORS.black}
                />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Feather
                  name="shopping-bag"
                  size={FONT_SIZE.lg}
                  color={COLORS.white}
                />
              ) : (
                <Feather
                  name="shopping-bag"
                  size={FONT_SIZE.lg}
                  color={COLORS.black}
                />
              )}
            </Center>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="user"
                  size={FONT_SIZE.lg}
                  color={COLORS.main}
                />
              ) : (
                <FontAwesome5
                  name="user"
                  size={FONT_SIZE.lg}
                  color={COLORS.black}
                />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: COLORS.white,
    height: 60,
  },
});

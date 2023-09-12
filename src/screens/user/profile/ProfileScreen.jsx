import { Center, Heading, Image, Pressable, Text } from "native-base";
import React, { useContext } from "react";
import { COLORS, FONT_SIZE } from "../../../utils/theme";
import Tabs from "../../../components/Profile/Tabs";
import { UserContext } from "../../../context/userContext";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigation = useNavigation();

  const handleSignOut = () => {
    setCurrentUser(null);
    navigation.navigate("Login");
  };

  return (
    <>
      <Center bg={COLORS.main} pt={10} pb={6}>
        <Image
          source={{
            uri: currentUser.image,
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          rounded="full"
        />
        <Heading
          bold
          fontSize={FONT_SIZE.md}
          isTruncated
          my={2}
          color={COLORS.white}
        >
          {currentUser.username}
        </Heading>
        <Pressable onPress={handleSignOut}>
          <Text mt={5}>
            <Feather name="log-out" size={FONT_SIZE.lg} color="black" /> LOG OUT
          </Text>
        </Pressable>
      </Center>

      <Tabs></Tabs>
    </>
  );
};

export default ProfileScreen;

import { Box, Button, Heading, Image, Input, Text, VStack } from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../../utils/theme";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
const RegisterScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg={COLORS.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        w="full"
        source={require("../../../../assets/cover.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack space={7} pt="10">
          <Input
            InputLeftElement={
              <FontAwesome
                name="user"
                size={FONT_SIZE.lg}
                color={COLORS.main}
              />
            }
            variant="underlined"
            placeholder="John Doe"
            pl={2}
            w="70%"
            color={COLORS.main}
            borderBottomColor={COLORS.underline}
            type="text"
          />

          <Input
            InputLeftElement={
              <Entypo name="email" size={FONT_SIZE.lg} color={COLORS.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            pl={2}
            w="70%"
            color={COLORS.main}
            borderBottomColor={COLORS.underline}
            type="email"
          />

          <Input
            InputLeftElement={
              <Entypo
                name="eye-with-line"
                size={FONT_SIZE.lg}
                color={COLORS.main}
              />
            }
            variant="underlined"
            placeholder="****"
            type="password"
            pl={2}
            w="70%"
            color={COLORS.main}
            borderBottomColor={COLORS.underline}
          />

          <Button
            _pressed={{
              bg: COLORS.main,
            }}
            my={30}
            w="40%"
            rounded={50}
            color={COLORS.main}
            onPress={() => navigation.navigate("Bottom")}
          >
            SIGN UP
          </Button>
          <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
            <Text color={COLORS.deepestGRay}>LOGIN</Text>
          </Pressable>
        </VStack>
      </Box>
    </Box>
  );
};

export default RegisterScreen;

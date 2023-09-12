import { Box, Center, Image, VStack } from "native-base";
import React from "react";
import { COLORS } from "../../utils/theme";
import MyButton from "../../components/Buttons/button";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={COLORS.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../../assets/favicon.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <MyButton bg={COLORS.black} color={COLORS.white}>
          REGISTER
        </MyButton>
        <MyButton bg={COLORS.white} color={COLORS.black}>
          LOGIN
        </MyButton>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;

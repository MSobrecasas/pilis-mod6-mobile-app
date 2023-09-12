import { Box, Center, Text } from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import { Feather } from "@expo/vector-icons";
import MyButton from "../Buttons/MyButton";

const Empty = () => {
  return (
    <Box flex={1} px={4}>
      <Center h="90%">
        <Center w={200} h={200} bg={COLORS.white} rounded="full">
          <Feather
            name="shopping-bag"
            size={FONT_SIZE.xxxl}
            color={COLORS.main}
          />
        </Center>
        <Text color={COLORS.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <MyButton bg={COLORS.black} color={COLORS.white}>
        START SHOPPING
      </MyButton>
    </Box>
  );
};

export default Empty;

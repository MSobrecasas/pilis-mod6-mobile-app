import { Box, Button, Center, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import CartItems from "../../components/cart/Item";
import MyButton from "../../components/Buttons/MyButton";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={COLORS.subGreen}>
      <Center w="full" py={5}>
        <Text color={COLORS.black} fontSize={FONT_SIZE.lg} bold>
          Cart
        </Text>
      </Center>
      {/* <Empty /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={COLORS.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={COLORS.main}
              _text={{
                color: COLORS.white,
                fontWeight: "semibold",
              }}
              _pressed={{
                bg: COLORS.main,
              }}
            >
              $777
            </Button>
          </HStack>
        </Center>

        <Center px={5}>
          <MyButton
            bg={COLORS.black}
            color={COLORS.white}
            mt={10}
            onPress={() => navigation.navigate("Shipping")}
          >
            CHECK OUT
          </MyButton>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;

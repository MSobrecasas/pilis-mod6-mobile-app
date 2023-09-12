import {
  Box,
  Button,
  Center,
  FlatList,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import PRODUCTS from "../../mocks/products";
import { COLORS, FONT_SIZE } from "../../utils/theme";

const OrderItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={PRODUCTS}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={COLORS.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={COLORS.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text
                  isTruncated
                  color={COLORS.black}
                  bold
                  fontSize={FONT_SIZE.sm}
                >
                  {item.name}
                </Text>
                <Text
                  isTruncated
                  color={COLORS.lightBlack}
                  mt={2}
                  bold
                  fontSize={FONT_SIZE.sm}
                >
                  ${item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={COLORS.main}
                  _pressed={{
                    bg: COLORS.main,
                  }}
                  _text={{
                    color: COLORS.white,
                  }}
                >
                  5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    ></FlatList>
  );
};

export default OrderItem;

import {
  Box,
  Center,
  HStack,
  Image,
  Pressable,
  VStack,
  Text,
  Button,
} from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import PRODUCTS from "../../mocks/products";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import { FontAwesome } from "@expo/vector-icons";

const Swiper = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey={0}
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={PRODUCTS.slice(0, 2)}
    renderItem={renderItems}
    renderHiddenItem={renderHiddenItems}
    showsVerticalScrollIndicator={false}
  />
);

const renderItems = (data, rowMap) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={COLORS.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={COLORS.deepGray}>
          <Image
            source={{ uri: data.item.image }}
            alt={data.item.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w="60%" px={2} space={2}>
          <Text isTruncated color={COLORS.black} bold fontSize={FONT_SIZE.md}>
            {data.item.name}
          </Text>
          <Text bold color={COLORS.lightBlack}>
            ${data.item.price}
          </Text>
        </VStack>
        <Center>
          <Button
            bg={COLORS.main}
            _pressed={{ bg: COLORS.main }}
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
);

const renderHiddenItems = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={COLORS.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={FONT_SIZE.md} color={COLORS.white} />
    </Center>
  </Pressable>
);

const Item = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
};

export default Item;

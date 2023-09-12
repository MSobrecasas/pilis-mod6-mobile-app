import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import React, { useState } from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import Rating from "../../components/rating/Rating";
import NumericInput from "react-native-numeric-input";
import MyButton from "../../components/Buttons/MyButton";
import Review from "../../components/review/Review";
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const [value, setvalue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={COLORS.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
          rounded={10}
          mt={4}
        />
        <Heading bold fontSize={FONT_SIZE.xl} mb={2} lineHeight={42} mt={5}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={COLORS.deepGray}
              rounded
              textColor={COLORS.black}
              iconStyle={{ color: COLORS.white }}
              rightButtonBackgroundColor={COLORS.main}
              leftButtonBackgroundColor={COLORS.main}
            />
          ) : (
            <Heading bold color={COLORS.red} italic fontSize={FONT_SIZE.md}>
              Out of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={COLORS.black} fontSize={FONT_SIZE.md}>
            ${product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={FONT_SIZE.lg} mt={3}>
          {product.description}
        </Text>
        <MyButton
          bg={COLORS.main}
          color={COLORS.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          ADD TO CART
        </MyButton>

        <Heading bold fontSize={FONT_SIZE.md} mt={5}>
          REVIEW
        </Heading>
        {product.reviews ? (
          product.reviews.map((review) => <Review review={review} />)
        ) : (
          <Text color={COLORS.red} fontSize={FONT_SIZE.lg}>
            No Reviews
          </Text>
        )}
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;

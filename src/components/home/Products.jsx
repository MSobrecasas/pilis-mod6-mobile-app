import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import Rating from "../rating/Rating";
import { useNavigation } from "@react-navigation/native";
import Search from "./Search";
import { getProductList } from "../../api/app.service";

const Products = () => {
  const navigation = useNavigation();
  const [productsList, setProductList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    getProductList()
      .then((data) => {
        if (Array.isArray(data)) {
          setProductList(data);
        } else {
          setProductList([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Search handleSearch={handleSearch} searchQuery={searchQuery} />
      <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          px={6}
        >
          {filteredProducts.map((product) => (
            <Pressable
              onPress={() => navigation.navigate("Single", product)}
              key={product.id}
              w="47%"
              bg={COLORS.white}
              rounded="md"
              shadow={2}
              pt={0}
              my={3}
              pb={2}
              overflow="hidden"
            >
              <Center>
                <Image
                  source={{ uri: product.image }}
                  alt={product.name}
                  w={120}
                  h={24}
                  resizeMode="cover"
                  rounded={5}
                  mt={5}
                ></Image>

                <Box px={4} pt={1}>
                  <Heading size="sm" bold>
                    ${product.price}
                  </Heading>
                  <Text fontSize={FONT_SIZE.sm} isTruncated w="full">
                    {product.name}
                  </Text>
                  <Rating value={product.rating}></Rating>
                </Box>
              </Center>
            </Pressable>
          ))}
        </Flex>
      </ScrollView>
    </>
  );
};

export default Products;

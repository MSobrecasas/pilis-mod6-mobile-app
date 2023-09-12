import { Box, HStack, Input, Pressable } from "native-base";
import React from "react";
import { COLORS, FONT_SIZE } from "../../utils/theme";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Search = ({ handleSearch, searchQuery }) => {
  const navigation = useNavigation();
  return (
    <HStack space={3} w="full" px={6} bg={COLORS.main} py={4} safeAreaTop>
      <Input
        placeholder="Cheemsburger, Mimlanesa, Papas Frimtas..."
        w="86%"
        bg={COLORS.white}
        type="search"
        variant="filled"
        h={12}
        borderWidth={0}
        _focus={{
          bg: COLORS.white,
        }}
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
        <Feather
          name="shopping-cart"
          size={FONT_SIZE.xl}
          color={COLORS.white}
        />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={COLORS.red}
          _text={{
            color: COLORS.white,
            fontSize: FONT_SIZE.md,
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
};

export default Search;

import { Box } from "native-base";
import { COLORS } from "../../utils/theme";
import Products from "../../components/home/Products";
import React from "react";

const HomeScreen = () => {
  return (
    <Box flex={1} bg={COLORS.subGreen}>
      <Products />
    </Box>
  );
};

export default HomeScreen;
